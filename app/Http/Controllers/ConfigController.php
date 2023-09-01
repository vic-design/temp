<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
//        dd($request->user());
//        $request->user()->forceFill([
//            'api_token' => hash('sha256', $token),
//        ])->save();
        return response(\Config::get('settings'));
    }
}
