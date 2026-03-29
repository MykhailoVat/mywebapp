import pool from "../pool.js";

class TasksRepository {
    constructor(pool) {
        this.pool = pool;
        //this.client = this.pool.connect();
    }

    async getAll() {
        return await this.pool.query('SELECT * FROM tasks');
    }

    async create(data) {
        const res = await this.pool.query
        ('INSERT INTO tasks (title, status) ' +
         'VALUES ($1, $2) RETURNING *',
         [data.title, data.status]);

        console.log(res.rows[0]);

        return res.rows[0];
    }

    async markDone(id) {
        return await this.pool.query
        (`UPDATE tasks SET status = 'DONE' WHERE id = $1`, [id]);
    }
}

export default new TasksRepository(pool);