<?php
    //CORS Configuration
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-type: application/json');

    //Getting Post Request Data
    $data = json_decode(file_get_contents('php://input'), true);

    $response = array();

    //Checking if post variables are set
    if(isset($data['operator']) && isset($data['firstNumber']) && isset($data['secondNumber'])){

        // Calculating result based on operator
        if($data['operator'] === '+'){
            $result = (float)$data['firstNumber'] + (float)$data['secondNumber'];
            $response['message'] = $result;
        }else if($data['operator'] === '-'){
            $result = (float)$data['firstNumber'] - (float)$data['secondNumber'];
            $response['message'] = $result;
        }else if($data['operator'] === '*'){
            $result = (float)$data['firstNumber'] * (float)$data['secondNumber'];
            $response['message'] = $result;
        } else{
            
            //Checking if divider is 0 to avoid Math Error
            if((float)$data['secondNumber'] === 0.0){
                $response['message'] = "Infinity";
            }else{
                $result = (float)$data['firstNumber'] / (float)$data['secondNumber'];
                $response['message'] = $result;
            }            
        } 

        //Printing result
        $response['response'] = "200";
        echo json_encode($response, JSON_PRETTY_PRINT);

    }else{

        //Printing 404 if post request is invalid
        $response['response'] = "404";
        $response['message'] = "Error";
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
    