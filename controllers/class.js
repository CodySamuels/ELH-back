// DEPENDENCIES
// ======================================================
const db = require("../models");
const router = require("express").Router();


// ROUTES
// ======================================================
// GET ALL CLASS INFO
router.get("/getAll", async (req, res) => {
    try {
        const classData = await db.item.findAll()
        res.json(classData)
    }

    catch (err) {
        console.error(err)
        res.status(500).end()
    }
})

// GETS A SINGLE CLASS' INFO
router.get("/:id", async ({ params: { id } } = req, res) => {
    try {
        const classData = await db.item.findOne({ where: { classId: id } })
        res.json(classData)
    }

    catch (err) {
        console.error(err)
        res.status(500).end()
    }
})

// CREATES A CLASS
router.post("/create", async ({ body } = req, res) => {
    try {
        const classData = await db.item.create(body)
        res.json(classData)
    }

    catch (err) {
        console.error(err)
        res.status(500).end()
    }
})

// UPDATE A CLASS
router.put("/update/:classId", async ({ body, params: { classId } } = req, res) => {
    try {
        const classDataUpdate = await db.item.update(body, { where: { classId: classId } })
        const classData = await db.item.findOne({ where: { classId: classId } })
        res.json(classData)
    }

    catch (err) {
        console.error(err)
        res.status(500).end()
    }
})

// DELETE A CLASS
router.delete('/delete/:classId', async ({ params: { classId } } = req, res) => {
    try {
        const classData = await db.item.destroy({ where: { classId: classId } })
        res.json(classData)
    }

    catch (err) {
        console.error(err)
        res.status(500).end()
    }
})


// EXPORT
// ======================================================
module.exports = router;