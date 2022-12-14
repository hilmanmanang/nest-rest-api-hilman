import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { ItemsModule } from './common/controllers/items/items.module';
import { GroupsModule } from './common/controllers/groups/groups.module';
import { GroupsService } from './common/providers/groups/groups.service';

dotenv.config()
@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URI),
        ItemsModule,
        GroupsModule
    ],
    controllers: [AppController],
    providers: [AppService, GroupsService],
})
export class AppModule { }
