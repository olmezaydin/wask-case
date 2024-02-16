<?php
function decodeHash(string $hashedData): string
{
    $characters = str_split("1234567890abcdefghijklmnoprstuvwxyz_+.@");
    $explodedData = str_split($hashedData, 32) ?? [];
    $lastKey = end($explodedData);
    $lastValue = null; // Uzunluğu tek Sayı olan hashedData için
    $decodedData = implode(array_map(function ($hashedValue) use ($characters, $lastKey, &$lastValue) {
        return implode(array_map(function ($val) use ($characters, $hashedValue, $lastKey, &$lastValue) {
            if (!$lastValue) $lastValue = $lastKey && $lastKey === md5(md5($val) . $val . md5($val)) ? $val : false;
            return implode(array_map(function ($val1) use ($val, $hashedValue) {
                return $hashedValue === md5(md5($val . $val1) . $val . $val1 . md5($val . $val1)) ? $val . $val1 : false;
            }, $characters));
        }, $characters));
    }, $explodedData));
    return $decodedData . $lastValue ?? '';
}

if (isset($argv[1])) {
    if (strlen($argv[1]) >= 32) {
        echo 'Sending Arg: ' . $argv[1] . "\n";
        echo 'Decoded Value: ' . decodeHash($argv[1]) . "\n";
    } else {
        echo 'Hash Not Valid' . "\n";
    }
} else {
    echo 'Send Arg, Example: php encode.php encoded_hash' . "\n";
}