/* Javascript File used to create the Vis.js graph network in the Course Relation Browser page
 * Implemented by Jun Okabe
 */

// graph nodes
var nodes = [
  { id: 0, label: "101", group: 0 },
  { id: 1, label: "102", group: 0 },
  { id: 2, label: "110", group: 1 },
  { id: 3, label: "111", group: 1 },
  { id: 4, label: "141", group: 2 },
  { id: 5, label: "210", group: 0 },
  { id: 6, label: "211", group: 1 },
  { id: 7, label: "212", group: 1 },
  { id: 8, label: "215", group: 1 },
  { id: 9, label: "222", group: 0 },
  { id: 10, label: "235", group: 9 },
  { id: 11, label: "241", group: 2 },
  { id: 12, label: "290", group: 0 },
  { id: 13, label: "311", group: 3 },
  { id: 14, label: "312", group: 9 },
  { id: 15, label: "313", group: 10 },
  { id: 16, label: "314", group: 7 },
  { id: 17, label: "321", group: 11 },
  { id: 18, label: "331", group: 14 },
  { id: 19, label: "332", group: 8 },
  { id: 20, label: "351", group: 12 },
  { id: 21, label: "355", group: 13 },
  { id: 22, label: "361", group: 10 },
  { id: 23, label: "390", group: 20 },
  { id: 24, label: "414", group: 7 },
  { id: 25, label: "415", group: 7 },
  { id: 26, label: "419", group: 16 },
  { id: 27, label: "421", group: 11 },
  { id: 28, label: "422", group: 6 },
  { id: 29, label: "423", group: 13 },
  { id: 30, label: "424", group: 7 },
  { id: 31, label: "425", group: 13 },
  { id: 32, label: "426", group: 13 },
  { id: 33, label: "428", group: 13 },
  { id: 34, label: "431", group: 14 },
  { id: 35, label: "432", group: 15 },
  { id: 36, label: "434", group: 9 },
  { id: 37, label: "435", group: 9 },
  { id: 38, label: "441", group: 5 },
  { id: 39, label: "442", group: 2 },
  { id: 40, label: "443", group: 3 },
  { id: 41, label: "451", group: 12 },
  { id: 42, label: "452", group: 7 },
  { id: 43, label: "455", group: 13 },
  { id: 44, label: "461", group: 10 },
  { id: 45, label: "462", group: 10 },
  { id: 46, label: "464", group: 16 },
  { id: 47, label: "465", group: 18 },
  { id: 48, label: "466", group: 7 },
  { id: 49, label: "469", group: 16 },
  { id: 50, label: "471", group: 4 },
  { id: 51, label: "475", group: 19 },
  { id: 52, label: "476", group: 19 },
  { id: 53, label: "481", group: 17 },
  { id: 54, label: "483", group: 17 },
  { id: 55, label: "484", group: 17 },
  { id: 56, label: "485", group: 7 },
  { id: 57, label: "491", group: 20 },
  { id: 58, label: "495", group: 13 },
  { id: 59, label: "499", group: 20 }
];

// graph edges
var edges = [
  { from: 23, to: 57 },
  { from: 57, to: 59 },
  { from: 59, to: 23 },

  { from: 51, to: 52 },
  { from: 52, to: 51 },

  { from: 53, to: 54 },
  { from: 54, to: 55 },
  { from: 55, to: 53 },

  { from: 26, to: 46 },
  { from: 46, to: 49 },
  { from: 49, to: 26 },

  { from: 18, to: 34 },
  { from: 34, to: 18 },

  { from: 21, to: 29 },
  { from: 29, to: 31 },
  { from: 31, to: 32 },
  { from: 32, to: 33 },
  { from: 33, to: 43 },
  { from: 43, to: 58 },
  { from: 58, to: 21 },

  { from: 20, to: 41 },
  { from: 41, to: 20 },

  { from: 17, to: 27 },
  { from: 27, to: 17 },

  { from: 15, to: 22 },
  { from: 22, to: 44 },
  { from: 44, to: 45 },
  { from: 45, to: 15 },

  { from: 10, to: 14 },
  { from: 14, to: 36 },
  { from: 36, to: 37 },
  { from: 37, to: 10 },

  { from: 16, to: 24 },
  { from: 24, to: 25 },
  { from: 25, to: 30 },
  { from: 30, to: 42 },
  { from: 42, to: 48 },
  { from: 48, to: 56 },
  { from: 56, to: 16 },

  { from: 13, to: 40 },
  { from: 40, to: 13 },

  { from: 4, to: 11 },
  { from: 11, to: 39 },
  { from: 39, to: 4 },

  { from: 2, to: 3 },
  { from: 3, to: 6 },
  { from: 6, to: 7 },
  { from: 7, to: 8 },
  { from: 8, to: 2 },

  { from: 0, to: 1 },
  { from: 1, to: 5 },
  { from: 5, to: 9 },
  { from: 9, to: 12 },
  { from: 12, to: 0 },

];

// place the graph at div with "coursenetwork" id
const container = document.getElementById("coursenetwork");


// setup graph object
const data = {
	nodes: nodes,
  	edges: edges
};

// customize graph object
const options = {
	// node customization
  	nodes: {
    	shape: "dot",
    	size: 35,
    	font: {
      		size: 35,
      		color: "#ffffff"
    	},
    	borderWidth: 2
  	},
  	// edge customization
  	edges: {
    	width: 2
  	},

  	// other graph customization (Ex. graph movement, etc.)
		physics: {
		hierarchicalRepulsion: {
  			avoidOverlap: 0.2, // prevent overlap
  			nodeDistance: 400, // distance between each node
  			stabilization: true // stabilize on load
		}
		}
};

// create the graph network
const network = new vis.Network(container, data, options);