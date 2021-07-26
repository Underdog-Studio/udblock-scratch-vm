const BlockType = require("../extension-support/block-type")
const ArgumentType = require("../extension-support/argument-type")

const carBlocks = [
    {
        type: "custom_seperator",
        text: '★ 控制',
    },
    // {
    //     opcode: 'readWindSensor',
    //     blockType: BlockType.REPORTER,
    //     text: '读取风速传感器于[PORT]',
    //     arguments: {
    //         PORT: {
    //             type: ArgumentType.STRING,
    //             menu: "RJADCMenu"
    //         }
    //     }
    // },
    {
        opcode: 'moveForward',
        blockType: BlockType.COMMAND,
        text: '以[SPEED]cm/s的速度前进',
        arguments: {
            SPEED: {
                type: ArgumentType.NUMBER,
                defaultValue: 10
            }
        }
    },
    {
        opcode: 'moveBack',
        blockType: BlockType.COMMAND,
        text: '以[SPEED]cm/s的速度后退',
        arguments: {
            SPEED: {
                type: ArgumentType.NUMBER,
                defaultValue: 10
            }
        }
    },
    {
        opcode: 'shiftLeft',
        blockType: BlockType.COMMAND,
        text: '以[SPEED]cm/s的速度左移',
        arguments: {
            SPEED: {
                type: ArgumentType.NUMBER,
                defaultValue: 10
            }
        }
    },
    {
        opcode: 'shiftRight',
        blockType: BlockType.COMMAND,
        text: '以[SPEED]cm/s的速度右移',
        arguments: {
            SPEED: {
                type: ArgumentType.NUMBER,
                defaultValue: 10
            }
        }
    },
    {
        opcode: 'turnLeft',
        blockType: BlockType.COMMAND,
        text: '以[SPEED]rad/s的速度左转',
        arguments: {
            SPEED: {
                type: ArgumentType.NUMBER,
                defaultValue: 30
            }
        }
    },
    {
        opcode: 'turnRight',
        blockType: BlockType.COMMAND,
        text: '以[SPEED]rad/s的速度右转',
        arguments: {
            SPEED: {
                type: ArgumentType.NUMBER,
                defaultValue: 30
            }
        }
    },
    {
        opcode: 'stopCar',
        blockType: BlockType.COMMAND,
        text: '停止小车'
    },
    {
        opcode: 'startServer',
        blockType: BlockType.COMMAND,
        text: '开启遥控功能 热点名[SSID] 密码[PSK]',
        arguments: {
            SSID: {
                type: ArgumentType.STRING,
                defaultValue: "udpi-" + (parseInt(Math.random() * 10000000 + ''))
            },
            PSK: {
                type: ArgumentType.STRING,
                defaultValue: "test12345678"
            }

        }
    },
    {
        opcode: 'stopServer',
        blockType: BlockType.COMMAND,
        text: '关闭遥控功能'
    },
    {
        opcode: 'servoTurn',
        blockType: BlockType.COMMAND,
        text: '控制舵机[INDEX]转动[DEGREE]度',
        arguments: {
            INDEX: {
                type: ArgumentType.STRING,
                menu: "servoMenu",
                defaultValue: "0x01"

            },
            DEGREE: {
                type: ArgumentType.NUMBER,
                defaultValue: 0
            }
        }
    },
    {
        opcode: 'startRoute',
        blockType: BlockType.COMMAND,
        text: '开启巡线模式',
    },
    {
        opcode: 'endRoute',
        blockType: BlockType.COMMAND,
        text: '停止巡线模式',
    },
    {
        opcode: 'startRouteFront',
        blockType: BlockType.COMMAND,
        text: '向前巡线 速度[SPD]cm/s',
        arguments: {
            SPD: {
                type: ArgumentType.NUMBER,
                defaultValue: 10
            }
        }
    },
    {
        opcode: 'startRouteBack',
        blockType: BlockType.COMMAND,
        text: '向后巡线 速度[SPD]cm/s',
        arguments: {
            SPD: {
                type: ArgumentType.NUMBER,
                defaultValue: 10
            }
        }
    },
    {
        type: "custom_seperator",
        text: '★ 小车传感器',
    },
    {
        opcode: 'getFrontInferredValueIndex',
        blockType: BlockType.BOOLEAN,
        text: '车前[INDEX]号巡线传感器检测到黑线',
        arguments: {
            INDEX: {
                type: ArgumentType.STRING,
                menu: "inferedIndexMenu",
                defaultValue: "0"

            }
        }
    },
    {
        opcode: 'getBackInferredValueIndex',
        blockType: BlockType.BOOLEAN,
        text: '车后[INDEX]号巡线传感器检测到黑线',
        arguments: {
            INDEX: {
                type: ArgumentType.STRING,
                menu: "inferedIndexMenu",
                defaultValue: "0"

            }
        }
    },
    {
        opcode: 'getInferredDirection',
        blockType: BlockType.BOOLEAN,
        text: '[DIRECTION]检测到黑线',
        arguments: {
            DIRECTION: {
                type: ArgumentType.STRING,
                menu: "inferedDirectionMenu",
                defaultValue: "front"

            }
        }
    },
    {
        opcode: 'getCross',
        blockType: BlockType.BOOLEAN,
        text: '识别到路口',
    },
    {
        opcode: 'getForwardSpd',
        blockType: BlockType.REPORTER,
        text: '获取前进速度(cm/s)',
    },
    {
        opcode: 'getBackwardSpd',
        blockType: BlockType.REPORTER,
        text: '获取后退速度(cm/s)',
    },
    {
        opcode: 'getLeftSpd',
        blockType: BlockType.REPORTER,
        text: '获取左转速度(cm/s)',
    },
    {
        opcode: 'getRightSpd',
        blockType: BlockType.REPORTER,
        text: '获取右转速度(cm/s)',
    },
]

module.exports = carBlocks;