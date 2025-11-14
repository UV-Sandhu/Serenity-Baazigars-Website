<?php
$folder = 'highlights_videos/';
$files = array();
$allowed_ext = array("mp4", "webm", "mov");
if (is_dir($folder)) {
    foreach (scandir($folder) as $file) {
        $pathinfo = pathinfo($file);
        if (isset($pathinfo['extension']) && in_array(strtolower($pathinfo['extension']), $allowed_ext)) {
            $files[] = array(
                "file" => $folder . $file,
                "title" => $pathinfo['filename']
            );
        }
    }
}
header('Content-Type: application/json');
echo json_encode($files);
?>
