pipeline{
    agent any
    tools {
        nodejs "mynodejs"
    }
    stages{
        stage("Get-code"){
            steps{
              echo 'login into aws intance'
           
              script {
                 

                    // Copy the built project to the EC2 instance
                    // sh "scp -i ${sshKey} -r * ${sshUser}@${ec2Ip}:${deployDir}"

                    // SSH into the EC2 instance and execute deployment commands
                    sh 'chmod 400 ./naveenServer.pem'
                    sh "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i ./naveenServer.pem ubuntu@13.53.168.70 'rm -rf nodejsCiCdTestApp && git clone https://github.com/navin-kumar-srnk/nodejsCiCdTestApp.git '"
                                       sh "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i ./naveenServer.pem ubuntu@13.53.168.70   'cd nodejsCiCdTestApp &&  /home/ubuntu/.nvm/versions/node/v14.21.3/bin/npm i && pm2 start'"
                    
                }
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