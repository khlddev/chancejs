import test from 'ava'
import Chance from '../chance.js'
import _ from 'lodash'

const chance = new Chance()



// chance.university()
test('university() returns a random university name', t => {
    _.times(1000, () => {
        let university = chance.university()
        t.true(_.isString(university))
        t.true(university.length >= 2)
        t.true(university.length <= 60)
        t.is(university.split(' ').length, 1)
    })
})

