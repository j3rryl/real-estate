import { Worker } from "worker_threads";
import path from "path";

// Number of workers you want to run concurrently
const numWorkers = 4;
const recordsPerWorker = 250 / numWorkers; // Total records divided by the number of workers

console.time("Seeding");

let workersDone = 0;

for (let i = 0; i < numWorkers; i++) {
  const worker = new Worker(path.resolve(__dirname, "workerSeeder.ts"), {
    workerData: {
      start: i * recordsPerWorker,
      end: (i + 1) * recordsPerWorker,
    },
  });

  worker.on("message", (msg) => console.log(msg));
  worker.on("error", (err) => console.error(err));

  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
    }
    workersDone++; // Increment the counter when a worker finishes
    if (workersDone === numWorkers) {
      console.timeEnd("Seeding"); // End timing when all workers are done
    }
  });
}
