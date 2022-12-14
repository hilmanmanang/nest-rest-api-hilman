import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemDto } from 'src/common/dto/item.dto';
import { Item } from 'src/common/interfaces/item.interface';
import { ItemsService } from 'src/common/providers/items/items.service';


@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemService: ItemsService
    ) { }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() itemDto: ItemDto): Promise<Item> {
        return this.itemService.create(itemDto)
    }

    @Delete(':id')
    delete(@Param('id') id: any): Promise<Item> {
        return this.itemService.delete(id);
    }

    @Put(':id')
    update(@Body() itemDto: ItemDto, @Param('id') id: any): Promise<Item> {
        return this.itemService.update(id, itemDto);
    }
}
