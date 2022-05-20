import MyMazda from "node-mymazda";

declare const Vehicles: KVNamespace

// Initialize API Client (MNAO = North America)
let client = new MyMazda("XXXXX@fabisevi.ch", "XXXXXX", "MNAO");

export async function authenticate(): Promise<void> {
	// Get list of vehicles from the API (returns a list)
	let vehicles = await client.getVehicles();
	console.log(vehicles)

	// Loop through the registered vehicles
	for (let vehicle of vehicles) {
		// Get vehicle ID (you will need this in order to perform any other actions with the vehicle)
		saveVehicleId(vehicle.id)

		// Get and output vehicle status
		// let status = await client.getVehicleStatus(vehicle.id);
		// console.log(status);

// This shouldn't be in here and should be moved out
		// getCarStatus(vehicle.id)

		// save vehicles into worker key

		// Start engine
		// await client.startEngine(vehicleId);
	}
}

// test();

// async function getCarStatus(id: number): Promise<VehicleStatus> {
// 	await client.getVehicleStatus(id)
// }

export async function lockCarDoors(): Promise<void> {
	let id = await vehicleId()
	client.lockDoors(id)
}

export async function unlockCarDoors(): Promise<void> {
	let id = await vehicleId()
	client.unlockDoors(id)
}

export async function startEngine(): Promise<void> {
	let id = await vehicleId()
	client.startEngine(id)	
}

export async function stopEngine(): Promise<void> {
	let id = await vehicleId()
	client.stopEngine(id)
}

export async function turnOnAirConditioner(): Promise<void> {
	let id = await vehicleId()
	client.setHVACSetting(id, 70, "F", false, false)
	client.turnOnHVAC(id)
}

export async function turnOffAirConditioner(): Promise<void> {
	let id = await vehicleId()
	client.turnOffHVAC(id)
}

const vehicleId = async () => {
	return Number(Vehicles.get("car-id"))
}

async function saveVehicleId(id: number) {
	console.log(id)

	Vehicles.put("car-id", id.toString())
}