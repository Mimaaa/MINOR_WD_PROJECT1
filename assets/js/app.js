const sparqlquery = `
	PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  PREFIX sem: <http://semanticweb.cs.vu.nl/2009/11/sem/>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  SELECT * WHERE {
    ?item dct:spatial ?building .
    ?item foaf:depiction ?imgurl .
    ?item dc:title ?title .
    ?item dc:description ?description .
    ?item sem:hasBeginTimeStamp ?year .
  FILTER(?building IN(
    <https://adamlink.nl/geo/building/centraal-station/1208>
   )) .
  FILTER REGEX (?description,  "(exterieur|gevel|zijde|aanzicht|richting)" ) .
}`;

const encodedquery = encodeURIComponent(sparqlquery);
const queryurl = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/hva2018/sparql?default-graph-uri=&query=' + encodedquery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on';

fetch(queryurl)
  .then(res => res.json())
  .then(data => {
    const rows = data.results.bindings;

    const arr1 = rows.slice(0, 16);
    const arr2 = rows.slice(17, 33);
    const arr3 = rows.slice(34, 50);
    const sets = [arr1, arr2, arr3];

    const options = sets.map(set => {
      return set
        .map(row => {
          const year = row.year.value.split('-')[0];
          return `
          <a-image width="2" height="2" src="${row.imgurl.value}">
            <a-plane color="black" position="-0.58 -0.77 0.01" height="0.3" width="0.7">
              <a-entity text-geometry="size: 0.15; value: ${year}" material="color: white;" position="-0.24 -0.07 0.01"></a-entity>
            </a-plane>
          </a-image>
          `;
        })
        .join('');
    });
    options.map((elString, index) =>
      document
        .getElementById(`pane${index}`)
        .insertAdjacentHTML('beforeend', elString)
    );
  })
  .catch(error => console.log(error));

