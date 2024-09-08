const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isJumping = false;
let gameOver = false
function jump() {
    if (!isJumping) {
        isJumping = true;
        let jumpHeight = 0;
        const jumpInterval = setInterval(() => {
            if (jumpHeight >= 100) {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (jumpHeight <= 0) {
                        clearInterval(fallInterval);
                        isJumping = false;
                    }
                    jumpHeight _= 10;
                    dino.style.bottom = jumpHeight + 'px';
                }, 20);
            }
        }
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                jump();
            }
        });
        function chekCollision() {
            const dinoRect =
                dino.getBoundingClientRect();
            const cactusRect =
                cactus.getBoundingClientRect();
            if (
                dinoRect.x < cactusRect.x +
                cactusRest.width &&
                dinoRect.x + dinoRect.width >
                cactusRect.x &&
                dinoRect.y < cactusRect.y +
                catusRect.height &&
                dinoRect.height + dinoRect.y >
                cactusRect.y
            ) {
                gameOver = true;
                alert('игра окончена!');
            }
        }
        function moveCactus() {
            let cactusPosition = 1000; (
                
                const moveInterval = setInterval(() => {
                if (gameOver) {
                    clearInterval(moveInterval);
                }
                if (cactusPosition < -20) {
                    cactusPosition = 1000;
                } else {
                        cactusPosition _ = 10
                }
                cactus.style.right = cactusPosition + 'px';
                checkCollisiomn();
            }, 20);
            }
        moveCactus();