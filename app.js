let dice1List = ["Ollie", "Fs 180", "Bs 180", "Bs Shove It", "Fs Shove It"]
let dice2List = ["Heelflip", "Kickflip", "Bigspin", "Varial Flip", "Bs Kickflip", "Hospital flip"]
let dice3List = ["360 Flip", "Dolphin flip", "Fs kickflip", "Hardflip"]
let stanceList = ["Regular", "Fakie", "Switch", "Nollie", "N'importe"]

let rollBtn = document.getElementById("start-btn")
rollBtn.addEventListener("click", roll)

function roll()
{
	let rollDice1 = dice1List[Math.floor(Math.random()*dice1List.length)]
	let rollDice2 = dice2List[Math.floor(Math.random()*dice2List.length)]
	let rollDice3 = dice3List[Math.floor(Math.random()*dice3List.length)]
	
	let stance = stanceList[Math.floor(Math.random()*stanceList.length)]
	let stanceAnim = document.getElementById("stance-style")
	
	let dice1 = document.getElementById("dice1-select")
	let dice2 = document.getElementById("dice2-select")
	let dice3 = document.getElementById("dice3-select")
	let dice1Tricks = document.getElementById("dice1-tricks")
	let dice2Tricks = document.getElementById("dice2-tricks")
	let dice3Tricks = document.getElementById("dice3-tricks")

	dice1Tricks.classList.add("hide")
	dice2Tricks.classList.add("hide")
	dice3Tricks.classList.add("hide")
	
	stanceAnim.classList.add("hide")
	
	dice1.classList.add("animate")
	dice2.classList.add("animate")
	dice3.classList.add("animate")

	setTimeout(() =>
		{
			dice1.classList.remove("animate")
			dice2.classList.remove("animate")
			dice3.classList.remove("animate")

			dice1Tricks.innerHTML = rollDice1
			dice2Tricks.innerHTML = rollDice2
			dice3Tricks.innerHTML = rollDice3

			stanceAnim.innerHTML = stance
			stanceAnim.classList.remove("hide")

			dice1Tricks.classList.remove("hide")
			dice2Tricks.classList.remove("hide")
			dice3Tricks.classList.remove("hide")
		}, 3000)
}
