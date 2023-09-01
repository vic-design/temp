<?php

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [/*'id' => 1, */'title' => 'Task one', 'description' => 'some task one description', 'priority' => 2, /*'created_at' => '2020-04-08', */'until' => '2020-04-12'],
            [/*'id' => 2, */'title' => 'Task two', 'description' => 'some task two description', 'priority' => 1, /*'created_at' => '2020-04-09', */'until' => '2020-04-11'],
            [/*'id' => 3, */'title' => 'Task three', 'description' => 'some task three description', 'priority' => 3, /*'created_at' => '2020-04-10', */'until' => '2020-04-13']
        ];

        foreach ($data as $item) {
            \App\Task::create($item);
        }
    }
}
