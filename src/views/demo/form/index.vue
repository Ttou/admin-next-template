<template>
  <div>
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      labelWidth="120px"
      labelPosition="right"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="formModel.name" />
      </el-form-item>
      <el-form-item label="Activity zone" prop="zone">
        <el-select v-model="formModel.zone">
          <el-option
            v-for="v in zoneOptions"
            :key="v.value"
            :label="v.value"
            :value="v.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time" prop="date">
        <el-date-picker v-model="formModel.date" style="width: 100%" />
      </el-form-item>
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="formModel.delivery" />
      </el-form-item>
      <el-form-item label="Activity type" prop="type">
        <el-checkbox-group v-model="formModel.type">
          <el-checkbox v-for="v in typeOptions" :key="v.value" :label="v.value">
            {{ v.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resource">
        <el-radio-group v-model="formModel.resource">
          <el-radio
            v-for="v in resourceOptions"
            :key="v.value"
            :label="v.value"
          >
            {{ v.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formModel.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="handleReset">重置</el-button>
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { type FormInstance, type FormRules } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      formRef: {} as FormInstance,
      formModel: {
        name: '',
        zone: '',
        date: '',
        delivery: '',
        type: [],
        resource: '',
        desc: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入', trigger: 'blur' },
          { min: 3, max: 5, message: '长度 3 到 5', trigger: 'blur' }
        ],
        zone: [{ required: true, message: '请选择', trigger: 'change' }],
        date: [
          {
            required: true,
            message: '请选择',
            trigger: 'change',
            type: 'object'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请选择',
            trigger: 'change'
          }
        ],
        resource: [{ required: true, message: '请选择', trigger: 'change' }],
        desc: [{ required: true, message: '请输入', trigger: 'blur' }]
      } as FormRules,
      zoneOptions: [
        { label: 'ShangHai', value: 'shanghai' },
        { label: 'BeiJing', value: 'beijing' }
      ],
      typeOptions: [
        { label: 'Online', value: '1' },
        { label: 'Promotion', value: '2' },
        { label: 'Offline', value: '3' }
      ],
      resourceOptions: [
        { label: 'Sponsor', value: '1' },
        { label: 'Venue', value: '2' }
      ]
    })

    function handleReset() {
      state.formRef.resetFields()
    }

    function handleCancel() {
      state.formRef.clearValidate()
    }

    function handleSubmit() {
      state.formRef.validate(valid => {})
    }

    return {
      ...toRefs(state),
      handleReset,
      handleCancel,
      handleSubmit
    }
  }
})
</script>
