import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from 'src/common/providers/items/items.service';
import { ItemSchema } from 'src/common/schemas/item.schema';
import { ItemsController } from './items.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule { }
