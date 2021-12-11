const EXTB_LIST = {
    "extb_mf": {
        "id": "udblockEXTBMF",
        "idv2": "udblockEXTBMFV2",
        "name": "多功能拓展版",
        "img": "assets/img/extb_mf.png",
        "description": "多功能拓展版",
        "RJ11": [
            {
                "name": "RJ1",
                "value": [
                    "33",
                    "5"
                ],
                "adc": "true"
            },
            {
                "name": "RJ2",
                "value": [
                    "32",
                    "17"
                ],
                "adc": "true"
            },
            {
                "name": "RJ3",
                "value": [
                    "18",
                    "2"
                ]
            },
            {
                "name": "RJ4",
                "value": [
                    "35",
                    "19"
                ],
                "adc": "true"
            },
            {
                "name": "RJ5",
                "value": [
                    "34",
                    "26"
                ],
                "adc": "true"
            },
            {
                "name": "RJ6",
                "value": [
                    "25",
                    "21"
                ]
            }
        ],
        "motor": [
            {
                "name": "MOTOR_1",
                "value": [
                    "1",
                    "0",
                    "0",
                    "2"
                ]
            },
            {
                "name": "MOTOR_2",
                "value": [
                    "3",
                    "2",
                    "1",
                    "3"
                ]
            }
        ],
        "servo": [
            {
                "name": "SERVO_1",
                "value": ["6","7"]
            },
            {
                "name": "SERVO_2",
                "value": ["7","8"]
            },
            {
                "name": "SERVO_3",
                "value": ["4","9"]
            },
            {
                "name": "SERVO_4",
                "value": ["5","10"]
            }
        ],
        "motor_v2": [
            {
                "name": "MOTOR_1",
                "value": [
                    "0",
                    "2"
                ]
            },
            {
                "name": "MOTOR_2",
                "value": [
                    "1",
                    "3"
                ]
            }
        ],
        "servo_v2": [
            {
                "name": "SERVO_1",
                "value": "7"
            },
            {
                "name": "SERVO_2",
                "value": "8"
            },
            {
                "name": "SERVO_3",
                "value": "9"
            },
            {
                "name": "SERVO_4",
                "value": "10"
            }
        ],
        "iic": [
            {
                "sda": "23",
                "scl": "22"
            }
        ],
        "touch": [
            {
                "text": "U",
                "value": "33"
            },
            {
                "text": "D",
                "value": "27"
            },
            {
                "text": "R",
                "value": "14"
            },
            {
                "text": "O",
                "value": "12"
            },
            {
                "text": "B",
                "value": "13"
            },
            {
                "text": "O2",
                "value": "15"
            },
            {
                "text": "T",
                "value": "4"
            }
        ]
    },
    "extb_io": {
        "id": "udblockEXTBIO",
        "idv2": "udblockEXTBIOV2",
        "name": "IO拓展版",
        "img": "assets/img/extb_io.png",
        "description": "IO拓展版",
        "RJ11": [
            {
                "name": "RJ1",
                "value": [
                    "33",
                    "5"
                ],
                "adc": "true"
            },
            {
                "name": "RJ2",
                "value": [
                    "32",
                    "17"
                ],
                "adc": "true"
            },
            {
                "name": "RJ3",
                "value": [
                    "15",
                    "18"
                ]
            },
            {
                "name": "RJ4",
                "value": [
                    "12",
                    "13"
                ]
            },
            {
                "name": "RJ5",
                "value": [
                    "21",
                    "19"
                ]
            },
            {
                "name": "RJ6",
                "value": [
                    "27",
                    "14"
                ]
            },
            {
                "name": "RJ7",
                "value": [
                    "34",
                    "25"
                ],
                "adc": "true"
            },
            {
                "name": "RJ8",
                "value": [
                    "35",
                    "26"
                ],
                "adc": "true"
            }
        ],
        "motor": [],
        "servo": [],
        "iic": [
            {
                "sda": "23",
                "scl": "22"
            }
        ],
        "touch": [
        ]
    },
    "extb_sm": {
        "id": "udblockEXTBSM",
        "idv2": "udblockEXTBSMV2",
        "name": "电机拓展版",
        "img": "assets/img/extb_sm.png",
        "description": "电机拓展版",
        "RJ11": [
            {
                "name": "RJ1",
                "value": [
                    "33",
                    "18"
                ],
                "adc": "true"
            },
            {
                "name": "RJ2",
                "value": [
                    "32",
                    "15"
                ],
                "adc": "true"
            },
            {
                "name": "RJ3",
                "value": [
                    "35",
                    "19"
                ],
                "adc": "true"
            },
            {
                "name": "RJ4",
                "value": [
                    "34",
                    "21"
                ],
                "adc": "true"
            }
        ],
        "motor": [
            {
                "name": "MOTOR_1",
                "value": [
                    "3",
                    "2",
                    "6",
                    "7"
                ]
            },
            {
                "name": "MOTOR_2",
                "value": [
                    "4",
                    "5",
                    "4",
                    "5",
                ]
            },
            {
                "name": "MOTOR_3",
                "value": [
                    "8",
                    "9",
                    "0",
                    "2"
                ]
            },
            {
                "name": "MOTOR_4",
                "value": [
                    "11",
                    "10",
                    "1",
                    "3"
                ]
            }
        ],
        "servo": [ //1->3 2->1 3->4 4->2
            {
                "name": "SERVO_1",
                "value": ["0","9"] //8
            },
            {
                "name": "SERVO_2",
                "value": ["1","11"] //9
            },
            {
                "name": "SERVO_3",
                "value": ["7","8"] //10
            },
            {
                "name": "SERVO_4",
                "value": ["6","10"] //11
            }
        ],
        "motor_v2": [
            {
                "name": "MOTOR_1",
                "value": [
                    "0",
                    "2"
                ]
            },
            {
                "name": "MOTOR_2",
                "value": [
                    "1",
                    "3"
                ]
            },
            {
                "name": "MOTOR_3",
                "value": [
                    "4",
                    "5"
                ]
            },
            {
                "name": "MOTOR_4",
                "value": [
                    "6",
                    "7"
                ]
            }
        ],
        "servo_v2": [
            {
                "name": "SERVO_1",
                "value": "8"
            },
            {
                "name": "SERVO_2",
                "value": "9"
            },
            {
                "name": "SERVO_3",
                "value": "10"
            },
            {
                "name": "SERVO_4",
                "value": "11"
            }
        ],
        "iic": [
            {
                "sda": "23",
                "scl": "22"
            }
        ],
        "touch": [
        ]
    },
    "extb_car": {
        "id": "udblockEXTBCar",
        "name": "小车拓展版",
        "img": "assets/img/extb_car.png",
        "description": "小车拓展版",
        "RJ11": [
            {
                "name": "RJ1",
                "value": [
                    "33",
                    "5"
                ],
                "adc": "true"
            },
            {
                "name": "RJ2",
                "value": [
                    "32",
                    "17"
                ],
                "adc": "true"
            },
            {
                "name": "RJ3",
                "value": [
                    "18",
                    "2"
                ]
            },
            {
                "name": "RJ4",
                "value": [
                    "35",
                    "19"
                ],
                "adc": "true"
            },
            {
                "name": "RJ5",
                "value": [
                    "34",
                    "26"
                ],
                "adc": "true"
            },
            {
                "name": "RJ6",
                "value": [
                    "25",
                    "21"
                ]
            }
        ],
        "servo": [
            {
                "name": "SERVO_1",
                "value": "0"
            },
            {
                "name": "SERVO_2",
                "value": "1"
            },
            {
                "name": "SERVO_3",
                "value": "7"
            },
            {
                "name": "SERVO_4",
                "value": "6"
            }
        ],
        "iic": [
            {
                "sda": "23",
                "scl": "22"
            }
        ],
        "touch": [
        ]
    },
    "extb_car_2d": {
        "id": "udblockEXTBCar2D",
        "name": "双驱小车拓展版",
        "img": "assets/img/extb_car.png",
        "description": "双驱小车拓展版",
        "RJ11": [
            {
                "name": "RJ1",
                "value": [
                    "33",
                    "5"
                ],
                "adc": "true"
            },
            {
                "name": "RJ2",
                "value": [
                    "32",
                    "17"
                ],
                "adc": "true"
            },
            {
                "name": "RJ3",
                "value": [
                    "18",
                    "2"
                ]
            },
            {
                "name": "RJ4",
                "value": [
                    "35",
                    "19"
                ],
                "adc": "true"
            },
            {
                "name": "RJ5",
                "value": [
                    "34",
                    "26"
                ],
                "adc": "true"
            },
            {
                "name": "RJ6",
                "value": [
                    "25",
                    "21"
                ]
            }
        ],
        "servo": [
            {
                "name": "SERVO_1",
                "value": "0"
            },
            {
                "name": "SERVO_2",
                "value": "1"
            },
            {
                "name": "SERVO_3",
                "value": "7"
            },
            {
                "name": "SERVO_4",
                "value": "6"
            }
        ],
        "iic": [
            {
                "sda": "23",
                "scl": "22"
            }
        ],
        "touch": [
        ]
    },
    "extb_iot": {
        "id": "udblockEXTBIOT",
        "name": "智能语音拓展板",
        "img": "assets/img/extb_car.png",
        "description": "智能语音拓展板",
        "RJ11": [
            {
                "name": "RJ1",
                "value": [
                    "33",
                    "5"
                ],
                "adc": "true"
            },
            {
                "name": "RJ2",
                "value": [
                    "32",
                    "17"
                ],
                "adc": "true"
            },
            {
                "name": "RJ3",
                "value": [
                    "34",
                    "26"
                ],
                "adc": "true"
            },
            {
                "name": "RJ4",
                "value": [
                    "35",
                    "19"
                ],
                "adc": "true"
            },
        ],
        "iic": [
            {
                "sda": "23",
                "scl": "22"
            }
        ],
    }
}

module.exports = EXTB_LIST;