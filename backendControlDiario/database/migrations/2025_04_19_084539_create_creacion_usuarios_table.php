<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('creacion_usuarios', function (Blueprint $table) {
            $table->id();
        $table->string('nombre');
        $table->string('email')->unique();
        $table->integer('numero_empleado')->unique();
        $table->string('tipo_de_tienda');
        $table->integer('numero_tienda');
        $table->string('password');
        $table->boolean('admind')->default(false);
        $table->boolean('subadmind')->default(false);
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creacion_usuarios');
    }
};
