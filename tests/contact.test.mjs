import test from 'node:test';
import assert from 'node:assert/strict';
import { contactDetails, optionalContactLinks } from '../lib/site-config.ts';

test('unconfirmed contact channels are absent',()=>{
  assert.deepEqual(contactDetails,{});
  assert.deepEqual(optionalContactLinks(),[]);
  assert.deepEqual(optionalContactLinks({email:' ',phone:'',whatsapp:'   '}),[]);
});
test('confirmed optional channels produce channel-specific links',()=>{
  assert.deepEqual(optionalContactLinks({email:' hello@example.test ',phone:'+1 202 555 0100',whatsapp:'+1 202 555 0101'}),[
    {kind:'email',label:'hello@example.test',href:'mailto:hello%40example.test'},
    {kind:'phone',label:'+1 202 555 0100',href:'tel:+12025550100'},
    {kind:'whatsapp',label:'+1 202 555 0101',href:'https://wa.me/12025550101'},
  ]);
});
