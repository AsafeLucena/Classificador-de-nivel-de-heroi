let nomeHeroi = "Flash"
let nivelHeroi = 2000
let eloHeroi = ""

switch (true) {
    case nivelHeroi < 1000:
       eloHeroi = "Ferro" 
       break
    case nivelHeroi >= 1000 && nivelHeroi < 2000:
       eloHeroi = "Bronze" 
       break
    case nivelHeroi >= 2000 && nivelHeroi < 6000:
       eloHeroi = "Prata" 
       break 
    case nivelHeroi >= 6000 && nivelHeroi < 7000:
       eloHeroi = "Ouro" 
       break 
    case nivelHeroi >= 7000 && nivelHeroi < 8000:
        eloHeroi = "Platina" 
        break 
    case nivelHeroi >= 8000 && nivelHeroi < 9000:
        eloHeroi = "Diamante" 
        break 
    case nivelHeroi >= 9000 && nivelHeroi < 10000:
        eloHeroi = "Mestre" 
        break 
    case nivelHeroi >= 10000:
        eloHeroi = "Desafiante" 
        break     
    }

    console.log("o Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + " e seu elo é: " + eloHeroi)
