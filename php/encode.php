<?php
function encodeHash(string $data): string
{
    return implode(array_map(function ($val) {
        return md5(md5($val) . $val . md5($val));
    }, str_split($data, 2))) ?? false;
}

if (isset($argv[1])) {
    echo 'Sending Arg: '. $argv[1] . "\n";
    echo 'Hash Code: '. encodeHash($argv[1]) . "\n";
} else {
    echo 'Send Arg, Example: php encode.php a@b.com' . "\n";
}