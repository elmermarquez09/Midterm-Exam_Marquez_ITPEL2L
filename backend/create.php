<?php
    require_once('connect.php');
    session_start();

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $message = array();

    $name = $data ['name'];
    $gender = $data ['gender'];
    $email = $data ['email'];
    $contact_number = $data ['contact_number'];
    $home_address = $data ['home_address'];

    //create the sql query
    $query = mysqli_query($con, "insert into customers_tbl(name, gender, email, contact_number,home_address, reg_date) values('$name', '$gender', '$email', '$contact_number', '$home_address', NOW())");
    if($query){
        http_response_code(201);
        $message['status'] = "Success....";
    }else{
        http_response_code(422);
        $message['status'] = 'Error....';
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>