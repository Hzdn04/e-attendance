<template>
  <div class="col mt-3">
       <!-- Bar chart -->
            <div class="card card-primary card-outline">
              <div class="card-header bg-primary">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Punctuality
                </h3>

                <div class="card-tools">
                  
                </div>
              </div>
              <div class="card-body">
               <line-chart :data="chartData"></line-chart>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->
      </div>
</template>

<script>
export default {
name: 'ChartUser',
data(){
    return {
        chartData:{
            '2017-05-13': 2,
            '2017-05-14': 5,
            '2017-05-15': 4,
        }
    }
},
}
</script>

<style>

</style>