import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePostDTO {
  @ApiModelProperty({required: false})
  readonly title?: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly body: string;

  @ApiModelProperty()
  readonly author: string;

  @ApiModelProperty()
  readonly date_posted: string
}