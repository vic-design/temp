@extends('layouts.app')

@section('content')

    <input type="hidden" name="_token" value="{{ $api_token }}">

    <home/>

@endsection
