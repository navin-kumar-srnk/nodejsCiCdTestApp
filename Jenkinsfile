pipeline{
    agent any
    tools {
        nodejs "mynodejs"
    }
    stages{
        stage("Get-code"){
            steps{
              echo 'login into aws intance'
              sh 'chmod 400 ./naveenServer.pem'
              sh 'ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i ./naveenServer.pem ubuntu@13.53.168.70'
              sh 'ls'
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}