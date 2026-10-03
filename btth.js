let chargingQueue = ['30A-111', '29B-222', '51C-333'];

console.log("trang thai ban dau ");
console.log(chargingQueue);

chargingQueue.push('43D-444');

console.log(" them xe ");
console.log(chargingQueue);

let priorityCar = '14A-999';

if (!chargingQueue.includes(priorityCar)) {
    chargingQueue.splice(1, 0, priorityCar);
}

console.log("xe uu tien co mat ");
console.log(chargingQueue);

let priorityIndex = chargingQueue.indexOf(priorityCar);

console.log("Vị trí xe ưu tiên:", priorityIndex);


// 5. Xe đầu hàng vào cổng sạc bằng shift()
let chargingCar = chargingQueue.shift();

console.log("=== XE VÀO CỔNG SẠC ===");
console.log("Xe vào sạc:", chargingCar);

console.log("Hàng đợi còn lại:");
console.log(chargingQueue);



// Mảng điện năng tiêu thụ
let electricity = [30, 45, 25];

// Đơn giá: 4.500 VNĐ/kWh
let pricePerKwh = 4500;

let totalKwh = 0;

// Duyệt mảng để tính tổng điện năng
for (let i = 0; i < electricity.length; i++) {
    totalKwh += electricity[i];
}

// Tính doanh thu
let totalRevenue = totalKwh * pricePerKwh;

console.log("=== BÁO CÁO CA TRỰC ===");
console.log("Tổng điện năng:", totalKwh, "kWh");
console.log("Đơn giá:", pricePerKwh, "VNĐ/kWh");
console.log("Tổng doanh thu:", totalRevenue, "VNĐ");

console.log("=== HÀNG ĐỢI CUỐI CA ===");
console.log(chargingQueue);