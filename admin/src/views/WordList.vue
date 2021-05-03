<template>
  <div>
    <h1>单词列表</h1>
    <el-table :data="words" stripe style="width: 100%">
      <el-table-column prop="_id" label="_id" width="180"> </el-table-column>
      <el-table-column prop="name" label="单词" width="180"> </el-table-column>
      <el-table-column prop="meaning" label="意思"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            words: []
        }
    },
    created() {
        
    }
}
</script>