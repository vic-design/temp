<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Task::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  TaskRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaskRequest $request)
    {
        $task = new Task();
        $task->title = $request->get('title');
        $task->description = $request->get('description');
        $task->priority = $request->get('priority');
        $task->until = Carbon::createFromDate($request->get('until'));
        $task->save();
        crypt('asd');

        return response(['status' => 'ok', 'answer' => $task]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        if($request->get('id')) {
            $task = $task->find($request->get('id'));
            $task->title = $request->get('title');
            $task->description = $request->get('description');
            $task->priority = $request->get('priority');
            $task->until = Carbon::createFromDate($request->get('until'));
            $task->status = $request->get('status');
            $task->completed_at = Carbon::createFromDate($request->get('completed_at'));
            $task->save();
        }

        return response(['status' => 'ok', 'answer' => $task]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        //
    }
}
