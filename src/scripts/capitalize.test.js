import { capitalize } from "./capitalize"

test('capitalizing first character',()=>{
    expect(capitalize('string')).toEqual('String')
})