import { getUserId } from 'services/utils.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    return !!getUserId(ctx.getContext());
  }
}