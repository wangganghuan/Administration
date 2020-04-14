<template>
  <div class="elementUi">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>PC端</el-breadcrumb-item>
      <el-breadcrumb-item>element</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-scrollbar>
      <el-card>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          size="mini"
          :show-header="true"
          :stripe="false"
        >
          <el-table-column type="index" label="编号" width="180" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="date" label="功能" width="180" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="name" label="参数" width="180" :show-overflow-tooltip="true"></el-table-column>

          <el-table-column label="可选值" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.address || '暂无' }}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button
                type="text"
                size="small"
                @click="copyClick(scope.row.name)"
                v-clipboard:copy="scope.row.name"
              >复制</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<script>
import install from "../pop.js";
export default {
  data() {
    return {
      tableData: [
        {
          date: "Table的尺寸",
          name: "size",
          address: "medium / small / mini",
          id: 2
        },
        {
          date: "列的宽度是否自撑开",
          name: "fit",
          address: "默认true",
          id: 3
        },
        {
          date: "是否要高亮当前行",
          name: "highlight-current-row",
          address: "默认false",
          id: 4
        },
        {
          date: "是否显示表头",
          name: "show-header",
          address: "默认true",
          id: 5
        },
        {
          date: "Table 的最大高度。合法的值为数字或者单位为 px 的高度",
          name: "max-height",
          address: "默认值为自适应",
          id: 6
        },
        {
          date: "是否为斑马纹 table",
          name: "stripe",
          address: "默认false",
          id: 6
        },
        {
          date: "是否带有纵向边框",
          name: "border",
          address: "默认false",
          id: 7
        },
        {
          date: "空数据时显示的文本内容，也可以通过",
          name: "empty-text",
          address: "",
          id: 8
        }
      ]
    };
  },
  methods: {
    copyClick(data) {
      install.pop(this.$message, `复制内容为${data}`, "success");
    }
  }
};
</script>
<style lang="scss" scoped>
.elementUi /deep/ {
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>