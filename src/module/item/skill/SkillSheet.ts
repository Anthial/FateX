import { ItemSheetFate } from "../ItemSheetFate";

export class SkillSheet extends ItemSheetFate {
    async getData(): any {
        const data = super.getData();

        data.magicSystemEnabled = game.settings.get("fatex", "guildCodexMagicSystemEnabled");

        return data;
    }
}
