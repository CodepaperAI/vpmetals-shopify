export type ProductSpec = { label: string; value: string };

export type CatalogProduct = {
	slug: string;
	name: string;
	model: string;
	collection: 'gas-cage' | 'material-rack';
	category: string;
	price?: number;
	image: string;
	contextImage: string;
	alt: string;
	description: string;
	application: string;
	specs: ProductSpec[];
	features: string[];
	featured?: boolean;
};

const cageFeatures = [
	'Exceptional solid metal fabrication',
	'Meticulously primed and painted for severe weather exposure',
	'Safety signage positioned at the top of the cage',
	'Built for maximum durability',
	'Backed by ProSteel\'s lifetime warranty',
];

const rackFeatures = [
	'Weather-resistant protective coating',
	'Drainage holes in the base rails help reduce corrosion',
	'Lean-back geometry supports stable material positioning',
	'Custom sizes are available on request',
];

const gasImage = (slug: string) => `/images/catalog/gas/${slug}.webp`;
const gasContext = (slug: string) => `/images/catalog/gas/${slug}-context.webp`;
const rackImage = (slug: string) => `/images/catalog/racks/${slug}.webp`;
const rackContext = (slug: string) => `/images/catalog/racks/${slug}-context.webp`;

export const gasProducts: CatalogProduct[] = [
	{
		slug: 'pse-20-33-2', name: '2-Cylinder Gas Cage', model: 'PSE 20-33-2', collection: 'gas-cage', category: 'Propane & BBQ', price: 501,
		image: gasImage('pse-20-33-2'), contextImage: gasContext('pse-20-33-2'), alt: 'Yellow ProSteel cage for two propane cylinders', featured: true,
		description: 'A compact vertical storage cage for two 20-33 lb gas cylinders, suited to commercial sites where secure storage must fit a smaller footprint.',
		application: 'Commercial propane storage, restaurants, maintenance areas, retail cylinder programs, and controlled outdoor storage.',
		specs: [{ label: 'Cylinder', value: '20-33 lb' }, { label: 'Capacity', value: '2 cylinders' }, { label: 'Height', value: '38 in' }, { label: 'Width', value: '26 in' }, { label: 'Depth', value: '15.5 in' }],
		features: [...cageFeatures, 'Catalogue notes NFPA 58-113, CSA B149.2, and OSHA 1910.110'],
	},
	{
		slug: 'pse-20-33-4', name: '4-Cylinder Gas Cage', model: 'PSE 20-33-4', collection: 'gas-cage', category: 'Propane & BBQ', price: 550,
		image: gasImage('pse-20-33-4'), contextImage: gasContext('pse-20-33-4'), alt: 'Yellow ProSteel cage for four propane cylinders',
		description: 'A secure vertical cage sized for four 20-33 lb cylinders, balancing accessible storage with a compact commercial footprint.',
		application: 'Restaurant service areas, retail propane storage, maintenance facilities, and light industrial sites.',
		specs: [{ label: 'Cylinder', value: '20-33 lb' }, { label: 'Capacity', value: '4 cylinders' }, { label: 'Height', value: '38 in' }, { label: 'Width', value: '26 in' }, { label: 'Depth', value: '26 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-20-33-6', name: '6-Cylinder Gas Cage', model: 'PSE 20-33-6', collection: 'gas-cage', category: 'Propane & BBQ', price: 635,
		image: gasImage('pse-20-33-6'), contextImage: gasContext('pse-20-33-6'), alt: 'Yellow ProSteel cage for six propane cylinders', featured: true,
		description: 'A six-cylinder storage cage for sites that need increased propane capacity without moving to a full-height enclosure.',
		application: 'Commercial kitchens, building operations, retail exchange programs, construction, and maintenance yards.',
		specs: [{ label: 'Cylinder', value: '20-33 lb' }, { label: 'Capacity', value: '6 cylinders' }, { label: 'Height', value: '38 in' }, { label: 'Width', value: '39 in' }, { label: 'Depth', value: '27.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-100-20-8-18', name: 'Dual-Capacity Cylinder Cage', model: 'PSE 100-20-8-18', collection: 'gas-cage', category: 'Propane & BBQ', price: 1485,
		image: gasImage('pse-100-20-8-18'), contextImage: gasContext('pse-100-20-8-18'), alt: 'Large ProSteel gas cylinder storage cage',
		description: 'A large dual-capacity enclosure configured for either eight 100 lb cylinders or eighteen 20 lb cylinders.',
		application: 'High-volume propane storage, industrial operations, distribution facilities, and commercial cylinder programs.',
		specs: [{ label: 'Cylinder', value: '100 lb / 20 lb' }, { label: 'Capacity', value: '8 / 18 cylinders' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '66 in' }, { label: 'Depth', value: '36 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-33-12', name: '12-Cylinder 33 lb Cage', model: 'PSE 33-12', collection: 'gas-cage', category: 'Forklift', price: 1008,
		image: gasImage('pse-33-12'), contextImage: gasContext('pse-33-12'), alt: 'ProSteel cage for twelve 33 lb cylinders',
		description: 'A full-height storage cage providing organized capacity for twelve 33 lb cylinders.',
		application: 'Forklift cylinder programs, warehouses, distribution centres, production facilities, and service depots.',
		specs: [{ label: 'Cylinder', value: '33 lb' }, { label: 'Capacity', value: '12 cylinders' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '39 in' }, { label: 'Depth', value: '27.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-20-24', name: '24-Cylinder BBQ Cage', model: 'PSE 20-24', collection: 'gas-cage', category: 'Propane & BBQ', price: 1499,
		image: gasImage('pse-20-24'), contextImage: gasContext('pse-20-24'), alt: 'Tall yellow ProSteel cage for twenty-four barbecue cylinders', featured: true,
		description: 'A high-capacity vertical cage designed specifically for twenty-four 20 lb barbecue cylinders.',
		application: 'Retail propane exchanges, hardware stores, hospitality operations, fuel suppliers, and distribution yards.',
		specs: [{ label: 'Cylinder', value: '20 lb BBQ tank' }, { label: 'Capacity', value: '24 cylinders' }, { label: 'Height', value: '75 in' }, { label: 'Width', value: '52 in' }, { label: 'Depth', value: '27.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-20-12', name: '12-Cylinder BBQ Cage', model: 'PSE 20-12', collection: 'gas-cage', category: 'Propane & BBQ', price: 890,
		image: gasImage('pse-20-12'), contextImage: gasContext('pse-20-12'), alt: 'ProSteel cage for twelve barbecue cylinders',
		description: 'A mid-capacity enclosure for twelve 20 lb barbecue cylinders with a manageable commercial footprint.',
		application: 'Retail exchanges, restaurants, hospitality, maintenance operations, and seasonal propane storage.',
		specs: [{ label: 'Cylinder', value: '20 lb BBQ tank' }, { label: 'Capacity', value: '12 cylinders' }, { label: 'Height', value: '54 in' }, { label: 'Width', value: '39 in' }, { label: 'Depth', value: '27.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-33-18', name: '18-Cylinder Forklift Cage', model: 'PSE 33-18', collection: 'gas-cage', category: 'Forklift', price: 1249,
		image: gasImage('pse-33-18'), contextImage: gasContext('pse-33-18'), alt: 'Orange ProSteel cage for eighteen forklift cylinders', featured: true,
		description: 'A full-height cage built to organize and secure eighteen 33 lb forklift propane tanks.',
		application: 'Warehouses, logistics centres, factories, industrial fleets, and high-volume forklift operations.',
		specs: [{ label: 'Cylinder', value: '33 lb forklift tank' }, { label: 'Capacity', value: '18 cylinders' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '39 in' }, { label: 'Depth', value: '40.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-33-8', name: '8-Cylinder Forklift Cage', model: 'PSE 33-8', collection: 'gas-cage', category: 'Forklift', price: 1042,
		image: gasImage('pse-33-8'), contextImage: gasContext('pse-33-8'), alt: 'ProSteel cage for eight forklift propane cylinders',
		description: 'A narrower full-height cage for secure storage of eight 33 lb forklift tanks.',
		application: 'Smaller forklift fleets, production facilities, service centres, warehouses, and secured outdoor storage.',
		specs: [{ label: 'Cylinder', value: '33 lb forklift tank' }, { label: 'Capacity', value: '8 cylinders' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '26 in' }, { label: 'Depth', value: '27.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-20-18', name: '18-Cylinder BBQ Cage', model: 'PSE 20-18', collection: 'gas-cage', category: 'Propane & BBQ', price: 1310,
		image: gasImage('pse-20-18'), contextImage: gasContext('pse-20-18'), alt: 'ProSteel cage for eighteen barbecue cylinders',
		description: 'A wide commercial cage for eighteen 20 lb barbecue cylinders with accessible organized storage.',
		application: 'Retail exchanges, fuel suppliers, hotels, restaurants, and commercial property operations.',
		specs: [{ label: 'Cylinder', value: '20 lb BBQ tank' }, { label: 'Capacity', value: '18 cylinders' }, { label: 'Height', value: '54 in' }, { label: 'Width', value: '39 in' }, { label: 'Depth', value: '40.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-33-147-8-4', name: 'Combination Forklift & Welding Cage', model: 'PSE 33-147-8-4', collection: 'gas-cage', category: 'Combination', price: 1567,
		image: gasImage('pse-33-147-8-4'), contextImage: gasContext('pse-33-147-8-4'), alt: 'Combination ProSteel cage for forklift and welding cylinders',
		description: 'A combination enclosure separating forklift and welding-cylinder storage within one industrial cage.',
		application: 'Fabrication shops, industrial maintenance departments, construction operations, and mixed-cylinder sites.',
		specs: [{ label: 'Cylinder', value: '33 lb forklift / 147.7 lb welding' }, { label: 'Capacity', value: '4+4 forklift and 4 welding cylinders' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '52 in' }, { label: 'Depth', value: '27.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-147-7-8', name: '8-Cylinder Welding Cage', model: 'PSE 147.7-8', collection: 'gas-cage', category: 'Welding', price: 1520,
		image: gasImage('pse-147-7-8'), contextImage: gasContext('pse-147-7-8'), alt: 'ProSteel cage for eight welding cylinders',
		description: 'A secure vertical cage sized for eight 147.7 lb welding cylinders.',
		application: 'Welding shops, fabrication facilities, maintenance departments, and construction operations.',
		specs: [{ label: 'Cylinder', value: '147.7 lb welding tank' }, { label: 'Capacity', value: '8 cylinders' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '52 in' }, { label: 'Depth', value: '27.5 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-147-7-20', name: '20-Cylinder Welding Cage', model: 'PSE 147.7-20', collection: 'gas-cage', category: 'Welding', price: 1955,
		image: gasImage('pse-147-7-20'), contextImage: gasContext('pse-147-7-20'), alt: 'Large ProSteel cage for twenty welding cylinders',
		description: 'The highest-capacity welding-cylinder cage in the catalogue, configured for twenty 147.7 lb tanks.',
		application: 'High-volume fabrication, industrial gas storage, major construction projects, and distribution sites.',
		specs: [{ label: 'Cylinder', value: '147.7 lb welding tank' }, { label: 'Capacity', value: '20 cylinders' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '64 in' }, { label: 'Depth', value: '40 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-147-7-16', name: '16-Cylinder Welding Cage', model: 'PSE 147.7-16', collection: 'gas-cage', category: 'Welding', price: 1350,
		image: gasImage('pse-147-7-16'), contextImage: gasContext('pse-147-7-16'), alt: 'Green ProSteel cage for sixteen welding cylinders',
		description: 'A durable full-height enclosure for sixteen large welding cylinders.',
		application: 'Fabrication facilities, industrial gas programs, maintenance operations, and manufacturing plants.',
		specs: [{ label: 'Cylinder', value: '147.7 lb welding tank' }, { label: 'Capacity', value: '16 cylinders' }, { label: 'Height', value: '73 in' }, { label: 'Width', value: '45 in' }, { label: 'Depth', value: '35 in' }], features: cageFeatures,
	},
	{
		slug: 'pse-al-147-7-16', name: 'Aluminum Oxygen Cylinder Cage', model: 'PSE AL 147.7-16', collection: 'gas-cage', category: 'Medical Gas', price: 1750,
		image: gasImage('pse-al-147-7-16'), contextImage: gasContext('pse-al-147-7-16'), alt: 'Laser-cut aluminum ProSteel oxygen cylinder cage', featured: true,
		description: 'A laser-cut aluminum cage designed for secure storage of eight 135 lb oxygen cylinders.',
		application: 'Hospitals, medical facilities, laboratories, clinics, and industrial oxygen-cylinder storage.',
		specs: [{ label: 'Cylinder', value: '135 lb oxygen tank' }, { label: 'Capacity', value: '8 cylinders' }, { label: 'Height', value: '76 in' }, { label: 'Width', value: '31 in' }, { label: 'Depth', value: '27 in' }],
		features: ['Laser-cut aluminum sheet construction', 'Safety signage positioned at the top of the cage', 'Built for maximum durability', 'Backed by ProSteel\'s lifetime warranty'],
	},
	{
		slug: 'pse-fwb', name: 'Firewood Bundle Cage', model: 'PSE FWB', collection: 'gas-cage', category: 'Specialty Carrier', price: 1440,
		image: gasImage('pse-fwb'), contextImage: gasContext('pse-fwb'), alt: 'Orange ProSteel firewood bundle carrier cage',
		description: 'A forklift- and crane-compatible cage developed to store and move kiln-dried firewood bundles.',
		application: 'Firewood suppliers, retail yards, landscape centres, distribution operations, and material handling.',
		specs: [{ label: 'Load', value: 'Firewood bundles' }, { label: 'Handling', value: 'Forklift and crane' }, { label: 'Height', value: '72 in' }, { label: 'Width', value: '36 in' }, { label: 'Depth', value: '36 in' }], features: cageFeatures,
	},
	{
		slug: 'model-420-1', name: 'Forklift / Crane Bottle Carrier', model: '420-1', collection: 'gas-cage', category: 'Specialty Carrier', price: 853,
		image: gasImage('model-420-1'), contextImage: gasContext('model-420-1'), alt: 'Yellow ProSteel forklift and crane-mounted bottle carrier', featured: true,
		description: 'A handling cage for one 420 lb gas cylinder, equipped for forklift or overhead-crane movement.',
		application: 'Industrial plants, construction, energy operations, gas suppliers, and controlled cylinder handling.',
		specs: [{ label: 'Cylinder', value: '420 lb' }, { label: 'Capacity', value: '1 cylinder' }, { label: 'Handling', value: 'Forklift / crane' }, { label: 'Height', value: '58 in' }, { label: 'Width', value: '36 in' }, { label: 'Depth', value: '36 in' }], features: cageFeatures,
	},
];

export const rackProducts: CatalogProduct[] = [
	{
		slug: 'economy-a-frame', name: 'Economy A-Frame', model: 'Economy A-Frame', collection: 'material-rack', category: 'A-Frame', image: rackImage('economy-a-frame'), contextImage: rackContext('economy-a-frame'), alt: 'Orange Economy A-Frame holding stone slabs', featured: true,
		description: 'A double-sided slab rack for stone, wood, and glass with a high rated capacity on each side.', application: 'Stone shops, glass operations, wood panel handling, fabrication facilities, and warehouse storage.',
		specs: [{ label: 'Capacity', value: '12,000 lb per side' }, { label: 'Dimensions', value: '60 L x 60 W x 58 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'single-sided-a-frame', name: 'Single-Sided A-Frame', model: 'Single-Sided A-Frame', collection: 'material-rack', category: 'A-Frame', image: rackImage('single-sided-a-frame'), contextImage: rackContext('single-sided-a-frame'), alt: 'Single-sided A-frame with stone samples',
		description: 'A wall-oriented single-sided rack providing high-capacity slab support where floor space is limited.', application: 'Stone showrooms, glass shops, warehouses, and wall-side material storage.',
		specs: [{ label: 'Capacity', value: '12,000 lb' }, { label: 'Dimensions', value: '48 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'heavy-duty-a-frame', name: 'Heavy Duty A-Frame', model: 'Heavy Duty A-Frame', collection: 'material-rack', category: 'A-Frame', image: rackImage('heavy-duty-a-frame'), contextImage: rackContext('heavy-duty-a-frame'), alt: 'Heavy-duty A-frame rack in a production facility', featured: true,
		description: 'A robust double-sided A-frame developed for demanding slab and panel storage.', application: 'Stone, glass, architectural millwork, manufacturing, and heavy panel storage.',
		specs: [{ label: 'Capacity', value: '12,000 lb per side' }, { label: 'Dimensions', value: '72 L x 48 W x 48 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'double-sided-transport-rack', name: 'Double-Sided Transport & Storage Rack', model: 'Double-Sided Transport Rack', collection: 'material-rack', category: 'Transport Rack', image: rackImage('double-sided-transport-rack'), contextImage: rackContext('double-sided-transport-rack'), alt: 'Double-sided rack transporting glass by forklift', featured: true,
		description: 'A double-sided A-frame engineered to combine material storage with forklift transport.', application: 'Glass fabrication, stone operations, window and door manufacturing, and internal logistics.',
		specs: [{ label: 'Capacity', value: '9,000 lb' }, { label: 'Dimensions', value: '96 L x 48 W x 60 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'modular-transport-rack', name: 'Metal Modular Transport Rack', model: 'Modular Transport Rack', collection: 'material-rack', category: 'Transport Rack', image: rackImage('modular-transport-rack'), contextImage: rackContext('modular-transport-rack'), alt: 'Modular transport rack loaded on a pickup truck',
		description: 'A modular rack designed for supported transport of slab and panel materials.', application: 'On-site delivery, stone and glass transport, fabrication shops, and field installation crews.',
		specs: [{ label: 'Capacity', value: '7,600 lb per side' }, { label: 'Dimensions', value: '60 L x 48 W x 72 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: rackFeatures,
	},
	{
		slug: 'mobile-a-frame', name: 'Mobile A-Frame Transport Rack', model: 'Mobile A-Frame', collection: 'material-rack', category: 'Mobile Rack', image: rackImage('mobile-a-frame'), contextImage: rackContext('mobile-a-frame'), alt: 'Blue mobile A-frame carrying stone slabs', featured: true,
		description: 'A mobile A-frame that brings slab storage directly into the production workflow.', application: 'Stone fabrication, glass processing, production lines, staging, and shop-floor movement.',
		specs: [{ label: 'Capacity', value: '7,000 lb per side' }, { label: 'Dimensions', value: '72 L x 48 W x 60 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }], features: ['Mobile caster-supported design', 'Full slab support design', ...rackFeatures],
	},
	{
		slug: 'mobile-l-frame', name: 'Mobile L-Frame Transport Rack', model: 'Mobile L-Frame', collection: 'material-rack', category: 'Mobile Rack', image: rackImage('mobile-l-frame'), contextImage: rackContext('mobile-l-frame'), alt: 'Single-sided mobile rack for narrow warehouse use',
		description: 'A mobile single-sided L-frame without a centre post, created for efficient access in constrained spaces.', application: 'Narrow warehouses, glass and stone production, staging aisles, and wall-side storage.',
		specs: [{ label: 'Capacity', value: '9,000 lb per side' }, { label: 'Dimensions', value: '60 W x 58 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: ['No centre post', 'Full slab support design', ...rackFeatures],
	},
	{
		slug: 'stone-fabrication-a-frame', name: 'Stone Fabrication A-Frame', model: 'Double-Sided Stone A-Frame', collection: 'material-rack', category: 'A-Frame', image: rackImage('stone-fabrication-a-frame'), contextImage: rackContext('stone-fabrication-a-frame'), alt: 'Double-sided rack for stone fabrication facilities',
		description: 'A compact double-sided A-frame configured for stone fabrication environments.', application: 'Stone fabrication facilities, countertop production, slab staging, and work-in-progress storage.',
		specs: [{ label: 'Capacity', value: '3,000 lb per side' }, { label: 'Dimensions', value: '72 L x 30 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: rackFeatures,
	},
	{
		slug: 'solo-shelf-rack', name: 'Solo Shelf Rack', model: 'Solo Shelf Rack - 2 Piece', collection: 'material-rack', category: 'Single-Sided Rack', image: rackImage('solo-shelf-rack'), contextImage: rackContext('solo-shelf-rack'), alt: 'Two-piece Solo Shelf Rack in a paint facility',
		description: 'A two-piece single-sided rack system for flexible slab and panel positioning.', application: 'Paint shops, fabrication facilities, narrow work areas, and flexible material staging.',
		specs: [{ label: 'Capacity', value: '5,200 lb per side' }, { label: 'Dimensions', value: '34 L x 39 W x 57 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: rackFeatures,
	},
	{
		slug: 'one-side-l-frame', name: 'One-Side L-Frame for Glass', model: 'One-Side L-Frame', collection: 'material-rack', category: 'Single-Sided Rack', image: rackImage('one-side-l-frame'), contextImage: rackContext('one-side-l-frame'), alt: 'One-side L-frame carrying large glass sheets',
		description: 'A high-capacity single-sided L-frame developed for glass sheets and large panels.', application: 'Glass manufacturing, glazing operations, window and door production, and sheet storage.',
		specs: [{ label: 'Capacity', value: '8,500 lb per side' }, { label: 'Dimensions', value: '72 L x 30 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'heavy-duty-double-sided-a-frame', name: 'Heavy Duty Double-Sided A-Frame', model: 'Heavy Duty Double-Sided A-Frame', collection: 'material-rack', category: 'A-Frame', image: rackImage('heavy-duty-double-sided-a-frame'), contextImage: rackContext('heavy-duty-double-sided-a-frame'), alt: 'Heavy-duty double-sided A-frame storage rack',
		description: 'A compact heavy-duty double-sided rack for high-capacity slab storage.', application: 'Stone, glass, wood panels, fabrication plants, and industrial warehouses.',
		specs: [{ label: 'Capacity', value: '9,000 lb per side' }, { label: 'Dimensions', value: '72 L x 30 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: rackFeatures,
	},
	{
		slug: 'multi-purpose-slab-rack', name: 'Multi-Purpose Slab Rack', model: 'PSE PS10', collection: 'material-rack', category: 'Slab Rack', price: 2000, image: rackImage('multi-purpose-slab-rack'), contextImage: rackContext('multi-purpose-slab-rack'), alt: 'Multi-purpose slab rack with capped steel posts',
		description: 'A configurable post-and-rail slab rack for flexible storage of heavy stone, glass, and panel materials.', application: 'Stone yards, glass facilities, warehouses, fabrication operations, and configurable slab storage.',
		specs: [{ label: 'Work load limit', value: '6,000 lb / 2,721.55 kg' }, { label: 'Dimensions', value: '120 L x 8 W x 60 H in' }, { label: 'Net weight per pair', value: '690 lb / 313 kg' }, { label: 'Poles / holes', value: '10 / 10' }, { label: 'Post options', value: '60, 48, or 36 in' }], features: ['Configurable removable post system', ...rackFeatures],
	},
	{
		slug: 'heavy-duty-bundle-slab-rack', name: 'Heavy-Duty Bundle Slab Rack', model: 'PSE PS10', collection: 'material-rack', category: 'Slab Rack', price: 2000, image: rackImage('heavy-duty-bundle-slab-rack'), contextImage: rackContext('heavy-duty-bundle-slab-rack'), alt: 'Heavy-duty bundle slab rack storing stone slabs', featured: true,
		description: 'A reinforced post-and-rail storage system for heavy slab bundles, with protective timber and capped uprights.', application: 'Stone distributors, slab warehouses, fabrication facilities, and high-capacity bundle storage.',
		specs: [{ label: 'Work load limit', value: '6,000 lb / 2,721.55 kg' }, { label: 'Dimensions', value: '120 L x 8 W x 63 H in' }, { label: 'Net weight per pair', value: '925 lb / 420 kg' }, { label: 'Poles / holes', value: '10 / 11' }, { label: 'Post options', value: '63, 48, or 36 in' }],
		features: ['5 mm wall extra-strong square steel posts', 'Heavy-duty steel base rails', 'Timber protection on base rails', 'Square rubber caps on uprights', ...rackFeatures],
	},
];

export const catalogProducts = [...gasProducts, ...rackProducts];
export const featuredProducts = catalogProducts.filter((product) => product.featured);
export const findProduct = (slug: string) => catalogProducts.find((product) => product.slug === slug);
export const formatPrice = (price?: number) => price === undefined ? 'Request a quote' : new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
