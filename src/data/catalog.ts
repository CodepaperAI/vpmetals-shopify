export type ProductSpec = { label: string; value: string };

export type CatalogProduct = {
	slug: string;
	name: string;
	model: string;
	collection: 'gas-cage' | 'material-rack' | 'industrial-table';
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

const tableFeatures = [
	'Heavy-duty metal frame construction',
	'Wheel size options available',
	'Custom sizes are available on request',
	'Built for commercial and industrial work areas',
];

const gasImage = (slug: string) => `/images/catalog/gas/${slug}.webp`;
const gasContext = (slug: string) => `/images/catalog/gas/${slug}-context.webp`;
const rackImage = (slug: string) => `/images/catalog/racks/${slug}.webp`;
const rackContext = (slug: string) => `/images/catalog/racks/${slug}-context.webp`;
const tableImage = (slug: string) => `/images/catalog/tables/${slug}.webp`;
const tableContext = (slug: string) => `/images/catalog/tables/${slug}-context.webp`;

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
		slug: 'economy-a-frame', name: 'Economy A-Frame', model: 'Economy A-Frame', collection: 'material-rack', category: 'A-Frame', price: 550, image: rackImage('economy-a-frame'), contextImage: rackContext('economy-a-frame'), alt: 'Orange Economy A-Frame holding stone slabs', featured: true,
		description: 'A double-sided slab rack for stone, wood, and glass with a high rated capacity on each side.', application: 'Stone shops, glass operations, wood panel handling, fabrication facilities, and warehouse storage.',
		specs: [{ label: 'Capacity', value: '12,000 lb per side' }, { label: 'Dimensions', value: '60 L x 60 W x 58 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'single-sided-a-frame', name: 'Single-Sided A-Frame', model: 'Single-Sided A-Frame', collection: 'material-rack', category: 'A-Frame', price: 490, image: rackImage('single-sided-a-frame'), contextImage: rackContext('single-sided-a-frame'), alt: 'Single-sided A-frame with stone samples',
		description: 'A wall-oriented single-sided rack providing high-capacity slab support where floor space is limited.', application: 'Stone showrooms, glass shops, warehouses, and wall-side material storage.',
		specs: [{ label: 'Capacity', value: '12,000 lb' }, { label: 'Dimensions', value: '48 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'heavy-duty-a-frame', name: 'Heavy Duty A-Frame', model: 'Heavy Duty A-Frame', collection: 'material-rack', category: 'A-Frame', price: 1450, image: rackImage('heavy-duty-a-frame'), contextImage: rackContext('heavy-duty-a-frame'), alt: 'Heavy-duty A-frame rack in a production facility', featured: true,
		description: 'A robust double-sided A-frame developed for demanding slab and panel storage.', application: 'Stone, glass, architectural millwork, manufacturing, and heavy panel storage.',
		specs: [{ label: 'Capacity', value: '12,000 lb per side' }, { label: 'Dimensions', value: '72 L x 48 W x 48 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'double-sided-transport-rack', name: 'Double-Sided Transport & Storage Rack', model: 'Double-Sided Transport Rack', collection: 'material-rack', category: 'Transport Rack', price: 1690, image: rackImage('double-sided-transport-rack'), contextImage: rackContext('double-sided-transport-rack'), alt: 'Double-sided rack transporting glass by forklift', featured: true,
		description: 'A double-sided A-frame engineered to combine material storage with forklift transport.', application: 'Glass fabrication, stone operations, window and door manufacturing, and internal logistics.',
		specs: [{ label: 'Capacity', value: '9,000 lb' }, { label: 'Dimensions', value: '96 L x 48 W x 60 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'modular-transport-rack', name: 'Metal Modular Transport Rack', model: 'Modular Transport Rack', collection: 'material-rack', category: 'Transport Rack', price: 1250, image: rackImage('modular-transport-rack'), contextImage: rackContext('modular-transport-rack'), alt: 'Modular transport rack loaded on a pickup truck',
		description: 'A modular rack designed for supported transport of slab and panel materials.', application: 'On-site delivery, stone and glass transport, fabrication shops, and field installation crews.',
		specs: [{ label: 'Capacity', value: '7,600 lb per side' }, { label: 'Dimensions', value: '72 L x 48 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: rackFeatures,
	},
	{
		slug: 'mobile-a-frame', name: 'Mobile A-Frame Transport Rack', model: 'Mobile A-Frame', collection: 'material-rack', category: 'Mobile Rack', price: 1800, image: rackImage('mobile-a-frame'), contextImage: rackContext('mobile-a-frame'), alt: 'Blue mobile A-frame carrying stone slabs', featured: true,
		description: 'A mobile A-frame that brings slab storage directly into the production workflow.', application: 'Stone fabrication, glass processing, production lines, staging, and shop-floor movement.',
		specs: [{ label: 'Capacity', value: '7,000 lb per side' }, { label: 'Dimensions', value: '72 L x 48 W x 60 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }], features: ['Mobile caster-supported design', 'Full slab support design', ...rackFeatures],
	},
	{
		slug: 'mobile-l-frame', name: 'Mobile L-Frame Transport Rack', model: 'Mobile L-Frame', collection: 'material-rack', category: 'Mobile Rack', price: 1345, image: rackImage('mobile-l-frame'), contextImage: rackContext('mobile-l-frame'), alt: 'Single-sided mobile rack for narrow warehouse use',
		description: 'A mobile single-sided L-frame without a centre post, created for efficient access in constrained spaces.', application: 'Narrow warehouses, glass and stone production, staging aisles, and wall-side storage.',
		specs: [{ label: 'Capacity', value: '3,000 lb per side' }, { label: 'Dimensions', value: '72 L x 30 W x 60 H in' }, { label: 'Front pole', value: '30 in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: ['No centre post', 'Full slab support design', ...rackFeatures],
	},
	{
		slug: 'stone-fabrication-a-frame', name: 'Stone Fabrication A-Frame', model: 'Double-Sided Stone A-Frame', collection: 'material-rack', category: 'A-Frame', price: 475, image: rackImage('stone-fabrication-a-frame'), contextImage: rackContext('stone-fabrication-a-frame'), alt: 'Double-sided rack for stone fabrication facilities',
		description: 'A compact double-sided A-frame configured for stone fabrication environments.', application: 'Stone fabrication facilities, countertop production, slab staging, and work-in-progress storage.',
		specs: [{ label: 'Capacity', value: '9,000 lb per side' }, { label: 'Dimensions', value: '60 W x 58 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: rackFeatures,
	},
	{
		slug: 'solo-shelf-rack', name: 'Solo Shelf Rack', model: 'Solo Shelf Rack - 2 Piece', collection: 'material-rack', category: 'Single-Sided Rack', price: 1550, image: rackImage('solo-shelf-rack'), contextImage: rackContext('solo-shelf-rack'), alt: 'Two-piece Solo Shelf Rack in a paint facility',
		description: 'A two-piece single-sided rack system for flexible slab and panel positioning.', application: 'Paint shops, fabrication facilities, narrow work areas, and flexible material staging.',
		specs: [{ label: 'Capacity', value: '5,200 lb per side' }, { label: 'Dimensions', value: '34 L x 39 W x 57 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: rackFeatures,
	},
	{
		slug: 'one-side-l-frame', name: 'One-Side L-Frame for Glass', model: 'One-Side L-Frame', collection: 'material-rack', category: 'Single-Sided Rack', price: 1350, image: rackImage('one-side-l-frame'), contextImage: rackContext('one-side-l-frame'), alt: 'One-side L-frame carrying large glass sheets',
		description: 'A high-capacity single-sided L-frame developed for glass sheets and large panels.', application: 'Glass manufacturing, glazing operations, window and door production, and sheet storage.',
		specs: [{ label: 'Capacity', value: '8,500 lb per side' }, { label: 'Dimensions', value: '72 L x 30 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }], features: ['Full slab support design', ...rackFeatures],
	},
	{
		slug: 'heavy-duty-double-sided-a-frame', name: 'Heavy Duty Double-Sided A-Frame', model: 'Heavy Duty Double-Sided A-Frame', collection: 'material-rack', category: 'A-Frame', price: 1450, image: rackImage('heavy-duty-double-sided-a-frame'), contextImage: rackContext('heavy-duty-double-sided-a-frame'), alt: 'Heavy-duty double-sided A-frame storage rack',
		description: 'A compact heavy-duty double-sided rack for high-capacity slab storage.', application: 'Stone, glass, wood panels, fabrication plants, and industrial warehouses.',
		specs: [{ label: 'Capacity', value: '9,000 lb per side' }, { label: 'Dimensions', value: '72 L x 30 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }], features: rackFeatures,
	},
	{
		slug: 'multi-purpose-slab-rack', name: 'Multi-Purpose Slab Rack', model: 'PSE PS10', collection: 'material-rack', category: 'Slab Rack', price: 2850, image: rackImage('multi-purpose-slab-rack'), contextImage: rackContext('multi-purpose-slab-rack'), alt: 'Multi-purpose slab rack with capped steel posts',
		description: 'A configurable post-and-rail slab rack for flexible storage of heavy stone, glass, and panel materials.', application: 'Stone yards, glass facilities, warehouses, fabrication operations, and configurable slab storage.',
		specs: [{ label: 'Work load limit', value: '6,000 lb / 2,721.55 kg' }, { label: 'Dimensions', value: '120 L x 8 W x 60 H in' }, { label: 'Net weight per pair', value: '690 lb / 313 kg' }, { label: 'Poles / holes', value: '10 / 10' }, { label: 'Post options', value: '60, 48, or 36 in' }], features: ['Configurable removable post system', ...rackFeatures],
	},
	{
		slug: 'heavy-duty-bundle-slab-rack', name: 'Heavy-Duty Bundle Slab Rack With Rubber Cap', model: 'PSE PS10', collection: 'material-rack', category: 'Slab Rack', price: 3400, image: rackImage('heavy-duty-bundle-slab-rack'), contextImage: rackContext('heavy-duty-bundle-slab-rack'), alt: 'Heavy-duty bundle slab rack with capped steel posts storing stone slabs', featured: true,
		description: 'A reinforced post-and-rail storage system for heavy slab bundles, with protective timber and capped uprights.', application: 'Stone distributors, slab warehouses, fabrication facilities, and high-capacity bundle storage.',
		specs: [{ label: 'Work load limit', value: '6,000 lb / 2,721.55 kg' }, { label: 'Dimensions', value: '120 L x 8 W x 63 H in' }, { label: 'Net weight per pair', value: '925 lb / 420 kg' }, { label: 'Poles / holes', value: '10 / 11' }, { label: 'Post options', value: '63, 48, or 36 in' }],
		features: ['5 mm wall extra-strong square steel posts', 'Heavy-duty steel base rails', 'Timber protection on base rails', 'Square rubber caps on uprights', ...rackFeatures],
	},
	{
		slug: 'one-side-frame-narrow-warehouse', name: 'One Side Frame for Narrow Warehouse', model: 'One Side Frame', collection: 'material-rack', category: 'Single-Sided Rack', price: 925,
		image: rackImage('one-side-frame-narrow-warehouse'), contextImage: rackContext('one-side-frame-narrow-warehouse'), alt: 'One-side frame for narrow warehouse slab storage',
		description: 'A single-sided frame for narrow warehouse aisles where slab and panel materials need compact wall-side support.',
		application: 'Narrow warehouses, stone and glass storage aisles, showrooms, and compact fabrication facilities.',
		specs: [{ label: 'Capacity', value: '9,000 lb per side' }, { label: 'Dimensions', value: '72 L x 30 W x 60 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Base', value: '3 in U-channel' }],
		features: rackFeatures,
	},
	{
		slug: 'heavy-duty-bundle-slab-rack-standard', name: 'Heavy-Duty Bundle Slab Rack', model: 'PSE PS10', collection: 'material-rack', category: 'Slab Rack', price: 2850,
		image: rackImage('heavy-duty-bundle-slab-rack-standard'), contextImage: rackContext('heavy-duty-bundle-slab-rack-standard'), alt: 'Heavy-duty bundle slab rack storing stone bundles',
		description: 'A heavy-duty post-and-rail rack for organized slab bundle storage without rubber-cap uprights.',
		application: 'Stone distributors, slab warehouses, fabrication facilities, and high-capacity bundle storage.',
		specs: [{ label: 'Work load limit', value: '6,481 lb / 2,940 kg' }, { label: 'Dimensions', value: '120 L x 8 W x 60 H in' }, { label: 'Poles / holes', value: '10 / 10' }, { label: 'Post height', value: '60 in' }],
		features: ['Configurable removable post system', 'Heavy-duty steel base rails', ...rackFeatures],
	},
];

export const tableProducts: CatalogProduct[] = [
	{
		slug: 'heavy-duty-mobile-transport-frame', name: 'Heavy Duty Mobile Transport Frame', model: 'Heavy Duty Mobile Transport Frame', collection: 'industrial-table', category: 'Mobile Transport Frame', price: 1025,
		image: tableImage('heavy-duty-mobile-transport-frame'), contextImage: tableContext('heavy-duty-mobile-transport-frame'), alt: 'Blue heavy-duty mobile transport frame on casters', featured: true,
		description: 'A wheeled 2 x 2 in square-pipe transport frame for moving long materials, assemblies, and work-in-progress around industrial sites.',
		application: 'Fabrication shops, warehouses, material staging, construction yards, and mobile production support.',
		specs: [{ label: 'Capacity', value: '1,800 lb per side' }, { label: 'Dimensions', value: '96 L x 24 W x 36 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Top', value: 'Frame only, top surface not included' }],
		features: ['Weather-resistant coating', ...tableFeatures],
	},
	{
		slug: 'three-tier-triple-stacker-table', name: '3-Tier Triple Stacker Table', model: '3-Tier Triple Stacker Table', collection: 'industrial-table', category: 'Stacker Table', price: 810,
		image: tableImage('three-tier-triple-stacker-table'), contextImage: tableContext('three-tier-triple-stacker-table'), alt: 'Blue three-tier triple stacker table on casters',
		description: 'A three-tier mobile table frame for organizing parts, cartons, fixtures, and production materials across multiple levels.',
		application: 'Assembly areas, production lines, warehouse staging, packing stations, and work-in-progress movement.',
		specs: [{ label: 'Capacity', value: '1,600 lb per side' }, { label: 'Dimensions', value: '72 L x 36 W x 36 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: 'Frame only, top surface not included' }],
		features: ['Weather-resistant coating', 'Three-tier storage layout', ...tableFeatures],
	},
	{
		slug: 'heavy-duty-industrial-platform-cart', name: 'Heavy Duty Industrial Platform Cart', model: 'Heavy Duty Industrial Platform Cart', collection: 'industrial-table', category: 'Platform Cart', price: 675,
		image: tableImage('heavy-duty-industrial-platform-cart'), contextImage: tableContext('heavy-duty-industrial-platform-cart'), alt: 'Blue heavy-duty industrial platform cart frame',
		description: 'A compact mobile platform cart frame for industrial movement, staging, and shop-floor support.',
		application: 'Warehouses, fabrication shops, assembly areas, shipping departments, and production staging.',
		specs: [{ label: 'Capacity', value: '1,400 lb per side' }, { label: 'Dimensions', value: '72 L x 24 W x 36 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: 'Frame only, top surface not included' }],
		features: ['Weather-resistant coating', ...tableFeatures],
	},
	{
		slug: 'garment-production-utility-cart', name: 'Garment Production Utility Cart', model: 'Garment Production Utility Cart', collection: 'industrial-table', category: 'Utility Cart', price: 790,
		image: tableImage('garment-production-utility-cart'), contextImage: tableContext('garment-production-utility-cart'), alt: 'Black garment production utility cart with backsplash',
		description: 'A mobile utility cart with backsplash for garment production, light assembly, and organized shop-floor handling.',
		application: 'Garment production, textile workrooms, light manufacturing, kitting, packing, and mobile work support.',
		specs: [{ label: 'Capacity', value: '650 lb per side' }, { label: 'Dimensions', value: '48 L x 24 W x 36 H in' }, { label: 'Frame', value: '1.25 x 1.25 in square pipe' }, { label: 'Detail', value: 'With backsplash' }],
		features: ['Weather-resistant coating', 'Backsplash helps contain materials on the cart surface', ...tableFeatures],
	},
	{
		slug: 'heavy-duty-six-wheel-work-table', name: 'Heavy-Duty 6-Wheel Work Table', model: 'Heavy-Duty 6-Wheel Work Table', collection: 'industrial-table', category: 'Work Table', price: 1075,
		image: tableImage('heavy-duty-six-wheel-work-table'), contextImage: tableContext('heavy-duty-six-wheel-work-table'), alt: 'Black heavy-duty six-wheel work table frame',
		description: 'A long six-wheel work table frame that supports larger workpieces and mobile staging in demanding production spaces.',
		application: 'Stone, glass, metal, woodworking, assembly, and industrial material handling workflows.',
		specs: [{ label: 'Capacity', value: '1,800 lb per side' }, { label: 'Dimensions', value: '96 L x 24 W x 36 H in' }, { label: 'Frame', value: '2 x 2 in square pipe' }, { label: 'Top', value: 'Frame only, top surface not included' }],
		features: ['Weather-resistant coating', 'Six-wheel mobile support', ...tableFeatures],
	},
	{
		slug: 'heavy-duty-steel-workbench', name: 'Heavy-Duty Steel Workbench', model: 'Heavy-Duty Steel Workbench', collection: 'industrial-table', category: 'Workbench', price: 930,
		image: tableImage('heavy-duty-steel-workbench'), contextImage: tableContext('heavy-duty-steel-workbench'), alt: 'Heavy-duty steel workbench with metal sheet top', featured: true,
		description: 'A steel workbench with a 16-gauge metal sheet top for durable industrial work, repairs, and production tasks.',
		application: 'Maintenance departments, fabrication shops, repair benches, assembly work, and industrial work cells.',
		specs: [{ label: 'Capacity', value: '1,800 lb per side' }, { label: 'Dimensions', value: '72 L x 36 W x 30 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: '16 gauge metal sheet included' }],
		features: ['Weather-resistant coating', 'Metal top surface included', ...tableFeatures],
	},
	{
		slug: 'industrial-mobile-workbench', name: 'Industrial Mobile Workbench', model: 'Industrial Mobile Workbench', collection: 'industrial-table', category: 'Workbench', price: 1350,
		image: tableImage('industrial-mobile-workbench'), contextImage: tableContext('industrial-mobile-workbench'), alt: 'Industrial mobile workbench with plywood top and lower shelf',
		description: 'A mobile workbench with plywood surfaces for staging tools, parts, assemblies, and active production work.',
		application: 'Industrial work cells, shop-floor repairs, fabrication support, assembly stations, and mobile maintenance work.',
		specs: [{ label: 'Capacity', value: '1,400 lb per side' }, { label: 'Dimensions', value: '96 L x 24 W x 30 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: '3/4 in plywood included' }],
		features: ['Weather-resistant coating', 'Plywood work surface included', ...tableFeatures],
	},
	{
		slug: 'three-tier-heavy-duty-mobile-assembly-workbench', name: '3-Tier Heavy-Duty Mobile Assembly Workbench', model: '3-Tier Mobile Assembly Workbench', collection: 'industrial-table', category: 'Assembly Workbench', price: 1315,
		image: tableImage('three-tier-heavy-duty-mobile-assembly-workbench'), contextImage: tableContext('three-tier-heavy-duty-mobile-assembly-workbench'), alt: 'Three-tier heavy-duty mobile assembly workbench with plywood surfaces', featured: true,
		description: 'A three-tier mobile assembly workbench with plywood surfaces for parts, tools, cartons, and active production flow.',
		application: 'Assembly operations, packing lines, repair work, tooling support, production staging, and warehouse work cells.',
		specs: [{ label: 'Capacity', value: '1,800 lb per side' }, { label: 'Dimensions', value: '96 L x 24 W x 36 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: '3/4 in plywood included' }],
		features: ['Weather-resistant coating', 'Three-tier work and storage layout', ...tableFeatures],
	},
	{
		slug: 'large-heavy-duty-industrial-platform-cart', name: 'Large Size Heavy Duty Industrial Platform Cart', model: 'Large Industrial Platform Cart', collection: 'industrial-table', category: 'Platform Cart', price: 1050,
		image: tableImage('large-heavy-duty-industrial-platform-cart'), contextImage: tableContext('large-heavy-duty-industrial-platform-cart'), alt: 'Large heavy-duty industrial platform cart frame',
		description: 'A wide mobile platform cart frame for larger assemblies, material staging, and industrial shop-floor transport.',
		application: 'Production floors, warehouses, fabrication areas, material handling, and staging of larger workpieces.',
		specs: [{ label: 'Capacity', value: '1,400 lb per side' }, { label: 'Dimensions', value: '96 L x 36 W x 36 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: 'Frame only, top surface not included' }],
		features: ['Weather-resistant coating', ...tableFeatures],
	},
	{
		slug: 'mobile-glass-handling-table', name: 'Mobile Glass Handling Table', model: 'Mobile Glass Handling Table', collection: 'industrial-table', category: 'Glass Handling Table', price: 990,
		image: tableImage('mobile-glass-handling-table'), contextImage: tableContext('mobile-glass-handling-table'), alt: 'Mobile glass handling table with plywood border',
		description: 'A mobile handling table configured for supported movement and staging of glass sheets and similar panel materials.',
		application: 'Glass shops, glazing operations, window and door production, panel staging, and fabrication workflows.',
		specs: [{ label: 'Capacity', value: '1,400 lb per side' }, { label: 'Dimensions', value: '96 L x 24 W x 30 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: '3/4 or 1.5 in plywood with 1.5 in border' }],
		features: ['Weather-resistant coating', 'Plywood support surface available', ...tableFeatures],
	},
	{
		slug: 'heavy-duty-industrial-metal-top-platform-cart', name: 'Heavy Duty Industrial Metal Top Platform Cart', model: 'Metal Top Platform Cart', collection: 'industrial-table', category: 'Platform Cart', price: 1025,
		image: tableImage('heavy-duty-industrial-metal-top-platform-cart'), contextImage: tableContext('heavy-duty-industrial-metal-top-platform-cart'), alt: 'Blue heavy-duty industrial platform cart with metal top',
		description: 'A mobile platform cart frame for industrial staging, shop-floor handling, and adaptable work-surface configurations.',
		application: 'Manufacturing, fabrication, assembly, staging, warehouse transport, and equipment support.',
		specs: [{ label: 'Capacity', value: '1,600 lb per side' }, { label: 'Dimensions', value: '72 L x 24 W x 36 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Top', value: 'Frame only, top surface not included' }],
		features: ['Weather-resistant coating', ...tableFeatures],
	},
	{
		slug: 'mobile-electronics-workstation', name: 'Mobile Electronics Workstation', model: 'Mobile Electronics Workstation', collection: 'industrial-table', category: 'Mobile Workstation', price: 990,
		image: tableImage('mobile-electronics-workstation'), contextImage: tableContext('mobile-electronics-workstation'), alt: 'Mobile electronics workstation with plywood top and lower rack',
		description: 'A mobile workstation with top and lower plywood racks for electronics production, kitting, and organized assembly work.',
		application: 'Electronics assembly, kitting, repair benches, light manufacturing, production lines, and mobile inspection stations.',
		specs: [{ label: 'Capacity', value: '1,600 lb per side' }, { label: 'Dimensions', value: '72 L x 24 W x 36 H in' }, { label: 'Frame', value: '1.5 x 1.5 in square pipe' }, { label: 'Surfaces', value: 'Top and bottom 3/4 in plywood racks included' }],
		features: ['Weather-resistant coating', 'Two-level plywood storage and work layout', ...tableFeatures],
	},
	{
		slug: 'heavy-duty-two-tier-service-cart-stainless-steel', name: 'Heavy-Duty 2-Tier Service Cart', model: 'Stainless Steel 2-Tier Service Cart', collection: 'industrial-table', category: 'Stainless Steel Cart', price: 980,
		image: tableImage('heavy-duty-two-tier-service-cart-stainless-steel'), contextImage: tableContext('heavy-duty-two-tier-service-cart-stainless-steel'), alt: 'Stainless steel two-tier service cart on casters',
		description: 'A stainless steel two-tier service cart for sanitary, food-service, and commercial work environments.',
		application: 'Food service, hospitality, commercial kitchens, cleaning operations, labs, and stainless work areas.',
		specs: [{ label: 'Capacity', value: '400 lb per side' }, { label: 'Dimensions', value: '42 L x 24 W x 35 H in' }, { label: 'Frame', value: '2 x 2 in round pipe' }, { label: 'Material', value: '304 stainless steel' }],
		features: ['Top surface included', '304 stainless steel construction', ...tableFeatures],
	},
	{
		slug: 'butchers-meat-cutting-table-stainless-steel', name: 'Butcher\'s Meat Cutting Table', model: 'Stainless Steel Meat Cutting Table', collection: 'industrial-table', category: 'Stainless Steel Table', price: 1480,
		image: tableImage('butchers-meat-cutting-table-stainless-steel'), contextImage: tableContext('butchers-meat-cutting-table-stainless-steel'), alt: 'Stainless steel butcher meat cutting table with catch tray', featured: true,
		description: 'A stainless steel meat cutting table with catch tray for butcher, food prep, and commercial kitchen environments.',
		application: 'Butcher shops, meat processing, commercial kitchens, food prep rooms, and stainless work stations.',
		specs: [{ label: 'Capacity', value: '1,400 lb per side' }, { label: 'Dimensions', value: '48 L x 24 W x 32 H in' }, { label: 'Frame', value: '2 x 2 in round pipe' }, { label: 'Material', value: '304 stainless steel' }],
		features: ['Catch tray included', 'Top surface included', '304 stainless steel construction', ...tableFeatures],
	},
	{
		slug: 'heavy-duty-16-ga-cutting-table', name: 'Heavy Duty 16 Ga. Cutting Table', model: '16 Ga. Cutting Table', collection: 'industrial-table', category: 'Stainless Steel Table', price: 2050,
		image: tableImage('heavy-duty-16-ga-cutting-table'), contextImage: tableContext('heavy-duty-16-ga-cutting-table'), alt: 'Stainless steel heavy-duty cutting table with backsplash',
		description: 'A heavy-duty stainless cutting table with backsplash and cutting-board surface for commercial preparation work.',
		application: 'Commercial kitchens, food prep rooms, production kitchens, butcher operations, and sanitary workstations.',
		specs: [{ label: 'Capacity', value: '400 lb per side' }, { label: 'Dimensions', value: '60 L x 30 W x 35 H in' }, { label: 'Frame', value: '2 x 2 in round pipe' }, { label: 'Material', value: '304 stainless steel, 16 ga / 1.5 mm' }],
		features: ['1 in cutting board', 'Backsplash included', 'Top surface included', '304 stainless steel construction', ...tableFeatures],
	},
	{
		slug: 'commercial-pizza-prep-table', name: 'Commercial Pizza Prep Table', model: 'Commercial Pizza Prep Table', collection: 'industrial-table', category: 'Stainless Steel Table', price: 2250,
		image: tableImage('commercial-pizza-prep-table'), contextImage: tableContext('commercial-pizza-prep-table'), alt: 'Commercial stainless steel pizza prep table with three-sided backsplash',
		description: 'A stainless steel pizza prep table with a three-sided backsplash for commercial kitchen and food-service work.',
		application: 'Pizzerias, commercial kitchens, bakeries, food prep rooms, and stainless service workstations.',
		specs: [{ label: 'Capacity', value: '600 lb per side' }, { label: 'Dimensions', value: '60 L x 30 W x 35 H in' }, { label: 'Frame', value: '2 x 2 in round pipe' }, { label: 'Material', value: '304 stainless steel' }],
		features: ['Three-sided backsplash included', 'Top surface included', '304 stainless steel construction', ...tableFeatures],
	},
];

export const catalogProducts = [...gasProducts, ...rackProducts, ...tableProducts];
export const featuredProducts = catalogProducts.filter((product) => product.featured);
export const findProduct = (slug: string) => catalogProducts.find((product) => product.slug === slug);
export const formatPrice = (price?: number) => price === undefined ? 'Request a quote' : new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
