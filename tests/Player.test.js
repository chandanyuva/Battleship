import { Player } from "../src/Player";
import { Gameboard } from "../src/GameBoard";

test("Enemy ship hitNum increases by 1 when hit by player", () => {
    const game = Gameboard();
    game.placeShip([0, 0], 2, "x");
    const player = Player(game);
    player.sendAttack([0, 1]);
    expect(game.objList[1].ship.getHitNum()).toBe(1);
});
