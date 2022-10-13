import React from 'react';

export default function Table(data) {
  return (
    <table className="table table-striped table-bordered ">
      <thead>
        <tr>
          <th>Vendor ID</th>
          <th>tpep Pickup Datetime</th>
          <th>tpep Dropoff Datetime</th>
          <th>Passenger Count</th>
          <th>Trip Distance</th>
          <th>Rate Code ID</th>
          <th>Store and Forward Flag</th>
          <th>Pickup Location ID</th>
          <th>Dropoff Location ID</th>
          <th>Payment Type</th>
          <th>Fare Amount</th>
          <th>Extra</th>
          <th>MTA Tax</th>
          <th>Tip Amount</th>
          <th>Tolls Amount</th>
          <th>Improvement Surcharge</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((row) => (
          <tr>
            <td>{row.vendorid}</td>
            <td>{row.tpep_pickup_datetime}</td>
            <td>{row.tpep_dropoff_datetime}</td>
            <td>{row.passenger_count}</td>
            <td>{row.trip_distance}</td>
            <td>{row.ratecodeid}</td>
            <td>{row.store_and_fwd_flag}</td>
            <td>{row.pulocationid}</td>
            <td>{row.dolocationid}</td>
            <td>{row.payment_type}</td>
            <td>{row.fare_amount}</td>
            <td>{row.extra}</td>
            <td>{row.mta_tax}</td>
            <td>{row.tip_amount}</td>
            <td>{row.tolls_amount}</td>
            <td>{row.improvement_surcharge}</td>
            <td>{row.total_amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
