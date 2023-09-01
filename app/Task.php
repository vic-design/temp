<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Task
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Task newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Task newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Task query()
 * @mixin \Eloquent
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property integer $priority
 * @property \DateTime $until
 * @property integer $status
 * @property \DateTime $completed_at
 *
 */
class Task extends Model
{
    protected $fillable = [
        'title', 'description', 'priority', 'until'
    ];
}
