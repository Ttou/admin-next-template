<template>
  <div>
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      labelWidth="120px"
      labelPosition="right"
    >
      <el-form-item
        :label="$t('app.views.example.demo.form.activityName')"
        prop="name"
      >
        <el-input v-model="formModel.name" />
      </el-form-item>
      <el-form-item
        :label="$t('app.views.example.demo.form.activityZone')"
        prop="zone"
      >
        <el-select v-model="formModel.zone">
          <el-option
            v-for="v in zoneOptions"
            :key="v.value"
            :label="v.label"
            :value="v.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        :label="$t('app.views.example.demo.form.activityTime')"
        prop="date"
      >
        <el-date-picker v-model="formModel.date" style="width: 100%" />
      </el-form-item>
      <el-form-item
        :label="$t('app.views.example.demo.form.instantDelivery')"
        prop="delivery"
      >
        <el-switch v-model="formModel.delivery" />
      </el-form-item>
      <el-form-item
        :label="$t('app.views.example.demo.form.activityType')"
        prop="type"
      >
        <el-checkbox-group v-model="formModel.type">
          <el-checkbox
            v-for="v in typeOptions"
            :key="v.value"
            :label="v.label"
            :value="v.value"
          />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item :label="$t('app.views.example.demo.form.resource')">
        <el-radio-group v-model="formModel.resource">
          <el-radio
            v-for="v in resourceOptions"
            :key="v.value"
            :label="v.label"
            :value="v.value"
          />
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="$t('app.views.example.demo.form.activityForm')">
        <el-input v-model="formModel.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="handleReset">
          {{ $t('app.buttons.reset') }}
        </el-button>
        <el-button @click="handleCancel">
          {{ $t('app.buttons.cancel') }}
        </el-button>
        <el-button type="primary" @click="handleSubmit">
          {{ $t('app.buttons.submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { type FormInstance, type FormRules } from 'element-plus'
import { computed, defineComponent, reactive, shallowRef, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

import { formData, type IFromData } from './define.ts'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const state = reactive({
      formRef: shallowRef<FormInstance>(),
      formModel: formData(),
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
      } as FormRules<IFromData>,
      zoneOptions: [
        {
          label: computed(() => t('app.views.example.demo.form.shanghai')),
          value: '1'
        },
        {
          label: computed(() => t('app.views.example.demo.form.beijing')),
          value: '2'
        }
      ],
      typeOptions: [
        {
          label: computed(() => t('app.views.example.demo.form.online')),
          value: '1'
        },
        {
          label: computed(() => t('app.views.example.demo.form.promotion')),
          value: '2'
        },
        {
          label: computed(() => t('app.views.example.demo.form.offline')),
          value: '3'
        }
      ],
      resourceOptions: [
        {
          label: computed(() => t('app.views.example.demo.form.sponsor')),
          value: '1'
        },
        {
          label: computed(() => t('app.views.example.demo.form.venue')),
          value: '2'
        }
      ]
    })

    function handleReset() {
      state.formRef?.resetFields()
    }

    function handleCancel() {
      state.formRef?.clearValidate()
    }

    function handleSubmit() {
      state.formRef?.validate(valid => {})
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
