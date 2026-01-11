<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class Helper
{
    /**
     * Upload a file to public/uploads directory
     */
    public static function uploadFile($file, $folder = 'uploads'): ?string
    {
        try {
            if (! $file || ! $file->isValid()) {
                throw new \Exception('Invalid file');
            }

            $path = public_path("uploads/$folder");
            File::ensureDirectoryExists($path);

            // Generate unique filename
            $name = time().'_'.Str::random(8).'.'.$file->getClientOriginalExtension();

            // Use store() method instead of move()
            $file->move($path, $name);

            return "uploads/$folder/$name";

        } catch (\Exception $e) {
            Log::error('File upload error: '.$e->getMessage());

            return null;
        }
    }

    public static function deleteFile(?string $filePath): bool
    {
        if (! $filePath) {
            return false;
        }

        $fullPath = public_path($filePath);

        if (file_exists($fullPath) && is_file($fullPath)) {
            return unlink($fullPath);
        }

        return false;
    }

    public static function generateURL(?string $filePath): ?string
    {
        if (empty($filePath) || trim($filePath) === '') {
            return null;
        }

        return asset($filePath);
    }
}
