window.BENCHMARK_DATA = {
  "lastUpdate": 1679483108798,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "9a1930226f22b5707f03e64309e31dd8c59e37ff",
          "message": "refactor(memtable): clean up dispatch code",
          "timestamp": "2023-03-22T11:42:49+01:00",
          "tree_id": "2e2585a65e6946b4941931dcd0aec6711979dc25",
          "url": "https://github.com/ibis-project/ibis/commit/9a1930226f22b5707f03e64309e31dd8c59e37ff"
        },
        "date": 1679482109973,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.40091498416035,
            "unit": "iter/sec",
            "range": "stddev: 0.00006153676213466349",
            "extra": "mean: 3.396728573529749 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11953.643449154571,
            "unit": "iter/sec",
            "range": "stddev: 0.00000190090654833376",
            "extra": "mean: 83.65650224164294 usec\nrounds: 7138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.35520991901106,
            "unit": "iter/sec",
            "range": "stddev: 0.00042632026261783",
            "extra": "mean: 21.572548193550148 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.8364873379505,
            "unit": "iter/sec",
            "range": "stddev: 0.00016421363303719452",
            "extra": "mean: 14.741329323527035 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.650256640929726,
            "unit": "iter/sec",
            "range": "stddev: 0.00009077613974537333",
            "extra": "mean: 63.89671574999767 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5272.860772881466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000561919966434023",
            "extra": "mean: 189.65037065705204 usec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 715247.2971583604,
            "unit": "iter/sec",
            "range": "stddev: 3.064978743496114e-7",
            "extra": "mean: 1.398117831375172 usec\nrounds: 23924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.856624150510775,
            "unit": "iter/sec",
            "range": "stddev: 0.00023124658634063406",
            "extra": "mean: 17.284105574472438 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 919.0189746746295,
            "unit": "iter/sec",
            "range": "stddev: 0.007170719895462414",
            "extra": "mean: 1.0881168153835354 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5265.889149848314,
            "unit": "iter/sec",
            "range": "stddev: 0.00006649213026433221",
            "extra": "mean: 189.90145283039337 usec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.54020308585788,
            "unit": "iter/sec",
            "range": "stddev: 0.0004918748931397889",
            "extra": "mean: 9.752272473682254 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.25817905095082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215493919254275",
            "extra": "mean: 9.500449361906066 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.63069750119409,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564001699040046",
            "extra": "mean: 9.649650384611927 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6776937234011694,
            "unit": "iter/sec",
            "range": "stddev: 0.0031654011699491502",
            "extra": "mean: 1.475592831199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.876282515750425,
            "unit": "iter/sec",
            "range": "stddev: 0.014775740594026004",
            "extra": "mean: 30.417064323526187 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.64303070795485,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929688934216815",
            "extra": "mean: 8.877602047060156 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9315305033501249,
            "unit": "iter/sec",
            "range": "stddev: 0.0019376351890964252",
            "extra": "mean: 1.0735021519999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5284.91729711247,
            "unit": "iter/sec",
            "range": "stddev: 0.000022841552446216672",
            "extra": "mean: 189.21771974489965 usec\nrounds: 2355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.620416874835823,
            "unit": "iter/sec",
            "range": "stddev: 0.0015344988029352877",
            "extra": "mean: 381.6186690000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.40495847530002,
            "unit": "iter/sec",
            "range": "stddev: 0.00008292953753546897",
            "extra": "mean: 13.623057907409475 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.47979890227937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008831669057525423",
            "extra": "mean: 8.440257404764733 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.98891619544672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005217965650277461",
            "extra": "mean: 8.26521991803439 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1675621.1324592254,
            "unit": "iter/sec",
            "range": "stddev: 9.71105346032182e-8",
            "extra": "mean: 596.7936191711487 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 158.2993703617164,
            "unit": "iter/sec",
            "range": "stddev: 0.009536566387688865",
            "extra": "mean: 6.317144520000208 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.19735780564408,
            "unit": "iter/sec",
            "range": "stddev: 0.00024697420371916123",
            "extra": "mean: 20.326294837835313 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 508507.63741297135,
            "unit": "iter/sec",
            "range": "stddev: 1.8787158548956935e-7",
            "extra": "mean: 1.9665388018309657 usec\nrounds: 2036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 549.780352049327,
            "unit": "iter/sec",
            "range": "stddev: 0.00002150033345802659",
            "extra": "mean: 1.8189082172043112 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.81288314663317,
            "unit": "iter/sec",
            "range": "stddev: 0.0002509652140328196",
            "extra": "mean: 3.523448227272141 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.987938863421736,
            "unit": "iter/sec",
            "range": "stddev: 0.0004455417836553374",
            "extra": "mean: 37.05358920000208 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.7856490366487,
            "unit": "iter/sec",
            "range": "stddev: 0.00750805611058956",
            "extra": "mean: 3.8642019127512826 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.79796325802292,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943359220262273",
            "extra": "mean: 9.451977799999545 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2557490.260783361,
            "unit": "iter/sec",
            "range": "stddev: 1.4077484619442903e-8",
            "extra": "mean: 391.0083316187279 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.70666483812127,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251643657646708",
            "extra": "mean: 9.284476513156909 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139417.88602008077,
            "unit": "iter/sec",
            "range": "stddev: 3.659664980854961e-7",
            "extra": "mean: 7.172680841366129 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.321587780597,
            "unit": "iter/sec",
            "range": "stddev: 0.00021211593403431013",
            "extra": "mean: 3.3747119387751865 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.6892525011696,
            "unit": "iter/sec",
            "range": "stddev: 0.00019637920019729773",
            "extra": "mean: 3.3037182250008557 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.19781407219807,
            "unit": "iter/sec",
            "range": "stddev: 0.0042210890379525004",
            "extra": "mean: 5.773744924881942 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5317310455548405,
            "unit": "iter/sec",
            "range": "stddev: 0.0010702558050355879",
            "extra": "mean: 180.77523866666922 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.0077304551641,
            "unit": "iter/sec",
            "range": "stddev: 0.00019356428908803394",
            "extra": "mean: 3.3669157313430893 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.50255918285265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006115470860375449",
            "extra": "mean: 8.368021629309922 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 92.69800214207295,
            "unit": "iter/sec",
            "range": "stddev: 0.00032029923716372737",
            "extra": "mean: 10.787719011110477 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.60833069312284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001693439358238916",
            "extra": "mean: 13.77252431579061 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.77684086659093,
            "unit": "iter/sec",
            "range": "stddev: 0.00010664577575255785",
            "extra": "mean: 3.098115705312689 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11668.492951668199,
            "unit": "iter/sec",
            "range": "stddev: 0.000016274414429194904",
            "extra": "mean: 85.70087021023858 usec\nrounds: 4515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.35785627306,
            "unit": "iter/sec",
            "range": "stddev: 0.00005051905455190335",
            "extra": "mean: 6.236052434482432 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.7207976824862,
            "unit": "iter/sec",
            "range": "stddev: 0.00001986663029714916",
            "extra": "mean: 1.4583194842269267 msec\nrounds: 634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2540509.3933614804,
            "unit": "iter/sec",
            "range": "stddev: 1.6568264798507248e-8",
            "extra": "mean: 393.621847104066 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2522648.624581324,
            "unit": "iter/sec",
            "range": "stddev: 2.6422967116069034e-8",
            "extra": "mean: 396.4087547730654 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 252.95142076994713,
            "unit": "iter/sec",
            "range": "stddev: 0.009130321512107712",
            "extra": "mean: 3.9533282594584613 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5776.923956454707,
            "unit": "iter/sec",
            "range": "stddev: 0.00004302635567938017",
            "extra": "mean: 173.10250360534414 usec\nrounds: 3467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5812.93821241304,
            "unit": "iter/sec",
            "range": "stddev: 0.000042671122498361056",
            "extra": "mean: 172.03004116998596 usec\nrounds: 3862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5820.292347504742,
            "unit": "iter/sec",
            "range": "stddev: 0.000042586604147060425",
            "extra": "mean: 171.81267542836005 usec\nrounds: 1750"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.74205898829868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000538521895992577",
            "extra": "mean: 6.144693057323927 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18101890108200375,
            "unit": "iter/sec",
            "range": "stddev: 0.11746937414540534",
            "extra": "mean: 5.5242850001999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1171.1976991789215,
            "unit": "iter/sec",
            "range": "stddev: 0.000019181783152886645",
            "extra": "mean: 853.8268139538344 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67758.6205623744,
            "unit": "iter/sec",
            "range": "stddev: 7.201085668276436e-7",
            "extra": "mean: 14.758269747824363 usec\nrounds: 13090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.86460283725836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005711243495174568",
            "extra": "mean: 8.342746535086027 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.53030871363927,
            "unit": "iter/sec",
            "range": "stddev: 0.000040564191490585283",
            "extra": "mean: 6.471222430889619 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5701603.591119951,
            "unit": "iter/sec",
            "range": "stddev: 6.903104304099686e-8",
            "extra": "mean: 175.38925392112168 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13326.034681488216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016891094996625283",
            "extra": "mean: 75.04107740235317 usec\nrounds: 6098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.6867301137467,
            "unit": "iter/sec",
            "range": "stddev: 0.00019083560405428718",
            "extra": "mean: 3.2186762519077856 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.113865165544,
            "unit": "iter/sec",
            "range": "stddev: 0.0006072763911761731",
            "extra": "mean: 8.395328273582624 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9188134812874179,
            "unit": "iter/sec",
            "range": "stddev: 0.004230416976241458",
            "extra": "mean: 1.088360173600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.65132796055089,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221229049247996",
            "extra": "mean: 8.798841315317551 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1740.5430085833998,
            "unit": "iter/sec",
            "range": "stddev: 0.000005993485797184553",
            "extra": "mean: 574.5333468167984 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5622.799687796304,
            "unit": "iter/sec",
            "range": "stddev: 0.00004458733048939446",
            "extra": "mean: 177.84734572181097 usec\nrounds: 2583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12510666.194955746,
            "unit": "iter/sec",
            "range": "stddev: 3.7762814097340685e-9",
            "extra": "mean: 79.93179455158945 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8543715985807099,
            "unit": "iter/sec",
            "range": "stddev: 0.0033571821620156637",
            "extra": "mean: 1.1704508923999923 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.46480512189366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006109263033116264",
            "extra": "mean: 9.481836133335895 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 255.56635661553614,
            "unit": "iter/sec",
            "range": "stddev: 0.003932968508483581",
            "extra": "mean: 3.912878100400204 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 260.7933478263374,
            "unit": "iter/sec",
            "range": "stddev: 0.010467243539676862",
            "extra": "mean: 3.8344536328660546 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7681274469319386,
            "unit": "iter/sec",
            "range": "stddev: 0.0014516163211317542",
            "extra": "mean: 565.57009039999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 350.2878913918863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000261838176078252",
            "extra": "mean: 2.8547946548379115 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.13555876541541,
            "unit": "iter/sec",
            "range": "stddev: 0.0006336673992029032",
            "extra": "mean: 8.323930152542644 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 740.6012615011796,
            "unit": "iter/sec",
            "range": "stddev: 0.000011491513092699776",
            "extra": "mean: 1.3502542487883775 msec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6739643.000801902,
            "unit": "iter/sec",
            "range": "stddev: 1.4664929269846282e-8",
            "extra": "mean: 148.37581157942472 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.354635110963068,
            "unit": "iter/sec",
            "range": "stddev: 0.00016828941150438166",
            "extra": "mean: 96.57510760000036 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.180537287926796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007597116826547971",
            "extra": "mean: 26.89579207142653 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.7678453370556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006900961878265077",
            "extra": "mean: 10.023269487494701 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8070.904459643057,
            "unit": "iter/sec",
            "range": "stddev: 0.000011175640597739993",
            "extra": "mean: 123.90185077772882 usec\nrounds: 3860"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.75923326116526,
            "unit": "iter/sec",
            "range": "stddev: 0.01664675344812508",
            "extra": "mean: 12.69692401250282 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6354107.7752930755,
            "unit": "iter/sec",
            "range": "stddev: 8.674950228323641e-9",
            "extra": "mean: 157.37850778791275 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.06502341820648,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131761512290607",
            "extra": "mean: 8.39877212712233 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.21557064760484,
            "unit": "iter/sec",
            "range": "stddev: 0.00006700327566983423",
            "extra": "mean: 8.99154672477092 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.87044335392793,
            "unit": "iter/sec",
            "range": "stddev: 0.0000321243768563946",
            "extra": "mean: 7.359952432002501 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.43722839017887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005600079025106858",
            "extra": "mean: 10.158758188886294 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.72075283371034,
            "unit": "iter/sec",
            "range": "stddev: 0.0006500163403024705",
            "extra": "mean: 9.928440483869268 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5609.34326516481,
            "unit": "iter/sec",
            "range": "stddev: 0.00004281674422644094",
            "extra": "mean: 178.27398908000663 usec\nrounds: 3205"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "e5df790df4accc9979a5c9b8e6642691dd806c06",
          "message": "chore: move function creation to cursor events",
          "timestamp": "2023-03-22T11:44:32+01:00",
          "tree_id": "f8d462edd9985008e4e18e7c87502b59caa49cc7",
          "url": "https://github.com/ibis-project/ibis/commit/e5df790df4accc9979a5c9b8e6642691dd806c06"
        },
        "date": 1679482565017,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4710.513534388529,
            "unit": "iter/sec",
            "range": "stddev: 0.00008950571088907558",
            "extra": "mean: 212.29107881754766 usec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 259.7051414413436,
            "unit": "iter/sec",
            "range": "stddev: 0.004699921361900609",
            "extra": "mean: 3.8505206113751806 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 105.93763493802521,
            "unit": "iter/sec",
            "range": "stddev: 0.00037247587431361347",
            "extra": "mean: 9.439516000003323 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10625.88356815404,
            "unit": "iter/sec",
            "range": "stddev: 0.00001479750969108252",
            "extra": "mean: 94.10982094675097 usec\nrounds: 4373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4761.853495598552,
            "unit": "iter/sec",
            "range": "stddev: 0.00007082178442649573",
            "extra": "mean: 210.00226086844418 usec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.524501341178988,
            "unit": "iter/sec",
            "range": "stddev: 0.04061170217452976",
            "extra": "mean: 221.01883159999716 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 583.4902775807479,
            "unit": "iter/sec",
            "range": "stddev: 0.00006067033401265593",
            "extra": "mean: 1.7138246144326068 msec\nrounds: 485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 151022.6960113183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013906856786095366",
            "extra": "mean: 6.621521310446315 usec\nrounds: 32050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6050233741554034,
            "unit": "iter/sec",
            "range": "stddev: 0.043287310566798236",
            "extra": "mean: 1.6528287049999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.285525168562907,
            "unit": "iter/sec",
            "range": "stddev: 0.010723304499239633",
            "extra": "mean: 437.53620119999823 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.34786847468041,
            "unit": "iter/sec",
            "range": "stddev: 0.00046870248710483557",
            "extra": "mean: 10.828620265059785 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.28642432585639,
            "unit": "iter/sec",
            "range": "stddev: 0.0008267722749613109",
            "extra": "mean: 10.605980735296244 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 655.9920427000616,
            "unit": "iter/sec",
            "range": "stddev: 0.00013187754178707047",
            "extra": "mean: 1.5244087350267277 msec\nrounds: 551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 274895.196080048,
            "unit": "iter/sec",
            "range": "stddev: 0.00000309913355354062",
            "extra": "mean: 3.637750001672657 usec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.76680953606467,
            "unit": "iter/sec",
            "range": "stddev: 0.004229973275232429",
            "extra": "mean: 5.134345027173798 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.34471066146266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007379385358906484",
            "extra": "mean: 10.599428340909352 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 251.51084529703962,
            "unit": "iter/sec",
            "range": "stddev: 0.00012453157305778912",
            "extra": "mean: 3.9759716874991176 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4527.365756487383,
            "unit": "iter/sec",
            "range": "stddev: 0.00004286547801574235",
            "extra": "mean: 220.87899537762624 usec\nrounds: 1298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.46164697847253,
            "unit": "iter/sec",
            "range": "stddev: 0.000839154855286721",
            "extra": "mean: 14.396433765958914 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1512014218567784,
            "unit": "iter/sec",
            "range": "stddev: 0.08873245702047483",
            "extra": "mean: 6.613694419799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 663958.540816404,
            "unit": "iter/sec",
            "range": "stddev: 6.751686345703343e-7",
            "extra": "mean: 1.506118136187237 usec\nrounds: 19723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7316.275466706532,
            "unit": "iter/sec",
            "range": "stddev: 0.000017284789327631193",
            "extra": "mean: 136.68156762967763 usec\nrounds: 3046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7914483705972287,
            "unit": "iter/sec",
            "range": "stddev: 0.016094349689978412",
            "extra": "mean: 1.2635062970000148 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.08983055606095,
            "unit": "iter/sec",
            "range": "stddev: 0.0004691380283965424",
            "extra": "mean: 18.152170553190793 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 99.85488762113596,
            "unit": "iter/sec",
            "range": "stddev: 0.0007691431022131142",
            "extra": "mean: 10.014532326090498 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.37439464597301,
            "unit": "iter/sec",
            "range": "stddev: 0.0003908136843679267",
            "extra": "mean: 8.171644100001332 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.27135730386216,
            "unit": "iter/sec",
            "range": "stddev: 0.0008791059187197161",
            "extra": "mean: 12.008931190480542 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4835.972301527641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000645351151320979",
            "extra": "mean: 206.78364921240527 usec\nrounds: 3113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 246.7226273765231,
            "unit": "iter/sec",
            "range": "stddev: 0.00008513760751656846",
            "extra": "mean: 4.053134528572855 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.52819115204522,
            "unit": "iter/sec",
            "range": "stddev: 0.00012546523359283912",
            "extra": "mean: 12.117071585364778 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 274.2312718546855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002444827226265805",
            "extra": "mean: 3.6465571312738456 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5682766195054683,
            "unit": "iter/sec",
            "range": "stddev: 0.012025222449131167",
            "extra": "mean: 637.6426120000019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.430063016869802,
            "unit": "iter/sec",
            "range": "stddev: 0.0003693804134295135",
            "extra": "mean: 74.45981442856058 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 63523.61875344487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017841047027424103",
            "extra": "mean: 15.742176211360288 usec\nrounds: 11123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4792.179253722439,
            "unit": "iter/sec",
            "range": "stddev: 0.00006812850979770681",
            "extra": "mean: 208.673329409209 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4395.6334982613525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001294391730035439",
            "extra": "mean: 227.49849376558342 usec\nrounds: 2807"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 139.34621953098002,
            "unit": "iter/sec",
            "range": "stddev: 0.000212087336533928",
            "extra": "mean: 7.176369788616158 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4709.331000492549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000605264192152155",
            "extra": "mean: 212.34438604876362 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 142.01954321748624,
            "unit": "iter/sec",
            "range": "stddev: 0.00018556338750363232",
            "extra": "mean: 7.041284441174532 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 100.43306320415613,
            "unit": "iter/sec",
            "range": "stddev: 0.0006308683990774729",
            "extra": "mean: 9.956880414642356 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.9527727343004,
            "unit": "iter/sec",
            "range": "stddev: 0.00032513031534783473",
            "extra": "mean: 3.832111034965665 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 105.8288519941129,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730087185885674",
            "extra": "mean: 9.449219009345661 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 108.30321235237047,
            "unit": "iter/sec",
            "range": "stddev: 0.000784200748951449",
            "extra": "mean: 9.233336466017692 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.79910024549923,
            "unit": "iter/sec",
            "range": "stddev: 0.0006609353327816821",
            "extra": "mean: 11.792577953126049 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1635105.9221696472,
            "unit": "iter/sec",
            "range": "stddev: 4.029735410944123e-7",
            "extra": "mean: 611.5811743089307 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1723629.7917292882,
            "unit": "iter/sec",
            "range": "stddev: 3.8445186639184954e-7",
            "extra": "mean: 580.1709884561214 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 95.11706610293298,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131860902194406",
            "extra": "mean: 10.513360440678738 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.36146491752308,
            "unit": "iter/sec",
            "range": "stddev: 0.0007293433228985276",
            "extra": "mean: 26.067826193551106 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.23151284362958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008465846317408654",
            "extra": "mean: 17.17283222033614 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.3640880182169,
            "unit": "iter/sec",
            "range": "stddev: 0.0007790080655899059",
            "extra": "mean: 10.063998170210803 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 259.43506949119376,
            "unit": "iter/sec",
            "range": "stddev: 0.0003081403734622707",
            "extra": "mean: 3.8545290039669977 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 267.20101538725265,
            "unit": "iter/sec",
            "range": "stddev: 0.000290463598566405",
            "extra": "mean: 3.742500748175327 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.362416546422764,
            "unit": "iter/sec",
            "range": "stddev: 0.0004565501769925259",
            "extra": "mean: 21.56919493181936 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 257.7388930936292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002804194871447624",
            "extra": "mean: 3.8798956106198856 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 93.56540230513505,
            "unit": "iter/sec",
            "range": "stddev: 0.0001574771990944656",
            "extra": "mean: 10.687711219781908 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4746.797736225983,
            "unit": "iter/sec",
            "range": "stddev: 0.00006082228590841726",
            "extra": "mean: 210.6683401250347 usec\nrounds: 2258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5113967.3327362165,
            "unit": "iter/sec",
            "range": "stddev: 2.5408747992236088e-8",
            "extra": "mean: 195.54289946289987 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 86.03346978687959,
            "unit": "iter/sec",
            "range": "stddev: 0.018460510884497783",
            "extra": "mean: 11.623383346936723 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.71911747588845,
            "unit": "iter/sec",
            "range": "stddev: 0.00101479985929883",
            "extra": "mean: 31.526728344827323 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 105.70858721788186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008269762441486392",
            "extra": "mean: 9.459969396231209 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4687307.753056746,
            "unit": "iter/sec",
            "range": "stddev: 5.031477780441181e-8",
            "extra": "mean: 213.342083064228 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1569.8761373872328,
            "unit": "iter/sec",
            "range": "stddev: 0.00005204190376144187",
            "extra": "mean: 636.992929686997 usec\nrounds: 1152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1744682.4946958448,
            "unit": "iter/sec",
            "range": "stddev: 3.996868208527013e-7",
            "extra": "mean: 573.1701917341313 nsec\nrounds: 175408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.33992828420648,
            "unit": "iter/sec",
            "range": "stddev: 0.0009413272703514599",
            "extra": "mean: 10.27327652307559 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.32661169851589,
            "unit": "iter/sec",
            "range": "stddev: 0.020482567964575097",
            "extra": "mean: 12.93215851612431 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1060.9033647122794,
            "unit": "iter/sec",
            "range": "stddev: 0.00008115064057141241",
            "extra": "mean: 942.5929196399554 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11779.937574378126,
            "unit": "iter/sec",
            "range": "stddev: 0.00000926736353480407",
            "extra": "mean: 84.89009332061686 usec\nrounds: 5015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.77060792187388,
            "unit": "iter/sec",
            "range": "stddev: 0.004340475931783062",
            "extra": "mean: 6.955524598904166 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6248085.336074507,
            "unit": "iter/sec",
            "range": "stddev: 2.6905834336165575e-8",
            "extra": "mean: 160.04903041674424 nsec\nrounds: 61346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 288.46730219408215,
            "unit": "iter/sec",
            "range": "stddev: 0.00030087014236482117",
            "extra": "mean: 3.466597400793783 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.844930349552186,
            "unit": "iter/sec",
            "range": "stddev: 0.0009485312412574809",
            "extra": "mean: 23.897757545453814 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4716.587718101735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000574681432167986",
            "extra": "mean: 212.0176830724704 usec\nrounds: 1849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7220558973602957,
            "unit": "iter/sec",
            "range": "stddev: 0.014532084336811055",
            "extra": "mean: 1.384934329400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.651113995841392,
            "unit": "iter/sec",
            "range": "stddev: 0.0012935988780289345",
            "extra": "mean: 44.147939045452425 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.99046391550509,
            "unit": "iter/sec",
            "range": "stddev: 0.0008654570766756685",
            "extra": "mean: 10.639377212766748 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13173.413090848318,
            "unit": "iter/sec",
            "range": "stddev: 0.000010013596315126905",
            "extra": "mean: 75.91047157662645 usec\nrounds: 6667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.80299260105207,
            "unit": "iter/sec",
            "range": "stddev: 0.0012067345201137159",
            "extra": "mean: 28.73316129630102 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 483.6113799676744,
            "unit": "iter/sec",
            "range": "stddev: 0.00016230314881454316",
            "extra": "mean: 2.0677759900249706 msec\nrounds: 401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.46137888586742,
            "unit": "iter/sec",
            "range": "stddev: 0.00033098246440670196",
            "extra": "mean: 6.82773853152965 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.54482020935205,
            "unit": "iter/sec",
            "range": "stddev: 0.00031504394733206223",
            "extra": "mean: 3.696245225564413 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.86736967343148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001362180397127146",
            "extra": "mean: 5.886945809089123 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7976168027968167,
            "unit": "iter/sec",
            "range": "stddev: 0.014898190190510922",
            "extra": "mean: 1.253734871800009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 301.596852524872,
            "unit": "iter/sec",
            "range": "stddev: 0.000043178105754366085",
            "extra": "mean: 3.3156844696100807 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.37546866033978,
            "unit": "iter/sec",
            "range": "stddev: 0.0008834339614340402",
            "extra": "mean: 9.962593583337545 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2284425.8463518466,
            "unit": "iter/sec",
            "range": "stddev: 4.586862431728632e-8",
            "extra": "mean: 437.74675444037223 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.9551099860546,
            "unit": "iter/sec",
            "range": "stddev: 0.0008071163010204503",
            "extra": "mean: 9.905392606061593 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9436046.976392142,
            "unit": "iter/sec",
            "range": "stddev: 1.702062426888106e-8",
            "extra": "mean: 105.97658134828445 nsec\nrounds: 91735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.288647361227905,
            "unit": "iter/sec",
            "range": "stddev: 0.0020635701577201527",
            "extra": "mean: 107.65830170000186 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "c816f006779cbeb04bd835e9c14b206ec9bb1f06",
          "message": "refactor(cache): factor out ref counted cache",
          "timestamp": "2023-03-22T11:56:56+01:00",
          "tree_id": "d160772b935b62ab85e51b5cba6c024fc912ad59",
          "url": "https://github.com/ibis-project/ibis/commit/c816f006779cbeb04bd835e9c14b206ec9bb1f06"
        },
        "date": 1679483022354,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.20293283031633,
            "unit": "iter/sec",
            "range": "stddev: 0.00040496714389820374",
            "extra": "mean: 17.48162114285898 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5765.325728279111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000431868574325206",
            "extra": "mean: 173.450737587118 usec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9272863733505041,
            "unit": "iter/sec",
            "range": "stddev: 0.0024552045871306947",
            "extra": "mean: 1.0784155021999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7586277225287332,
            "unit": "iter/sec",
            "range": "stddev: 0.003487297771025246",
            "extra": "mean: 568.6251769999956 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13162.89418617525,
            "unit": "iter/sec",
            "range": "stddev: 0.000005080084216726206",
            "extra": "mean: 75.97113414846729 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.63090795072515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005920376873986735",
            "extra": "mean: 10.913348152544264 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1690097.2164528375,
            "unit": "iter/sec",
            "range": "stddev: 1.1220068617618562e-7",
            "extra": "mean: 591.681940106849 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 613.596408990121,
            "unit": "iter/sec",
            "range": "stddev: 0.003907269649328828",
            "extra": "mean: 1.6297357438024058 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.1843733599478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001869812010823909",
            "extra": "mean: 3.3202253783760955 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.3680981322763,
            "unit": "iter/sec",
            "range": "stddev: 0.00019675964279717155",
            "extra": "mean: 3.221980628865433 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.52135967210164,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476335219081924",
            "extra": "mean: 8.43729773912969 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7592.913762504619,
            "unit": "iter/sec",
            "range": "stddev: 0.00006790440090816977",
            "extra": "mean: 131.70174603301925 usec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.372603189226474,
            "unit": "iter/sec",
            "range": "stddev: 0.00034165897836779547",
            "extra": "mean: 96.40781409999875 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.67161740042617,
            "unit": "iter/sec",
            "range": "stddev: 0.0001525792298025906",
            "extra": "mean: 14.562056899999476 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.65100444624788,
            "unit": "iter/sec",
            "range": "stddev: 0.00009398876269658104",
            "extra": "mean: 9.037423609523405 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.4405287130055,
            "unit": "iter/sec",
            "range": "stddev: 0.00020905735831185777",
            "extra": "mean: 3.263275925674121 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 769439.605143646,
            "unit": "iter/sec",
            "range": "stddev: 1.680532019048158e-7",
            "extra": "mean: 1.2996471630977597 usec\nrounds: 21979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.81454130287189,
            "unit": "iter/sec",
            "range": "stddev: 0.0008180157945027933",
            "extra": "mean: 10.32902688524473 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.65976553666341,
            "unit": "iter/sec",
            "range": "stddev: 0.000596466668117173",
            "extra": "mean: 8.427456395833014 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5880764.729606313,
            "unit": "iter/sec",
            "range": "stddev: 9.548390011195081e-9",
            "extra": "mean: 170.04591171051595 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.11549250151943,
            "unit": "iter/sec",
            "range": "stddev: 0.000653440219290927",
            "extra": "mean: 8.840521999995424 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.73423953139569,
            "unit": "iter/sec",
            "range": "stddev: 0.000725229951345621",
            "extra": "mean: 9.733853139530945 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.88469267616701,
            "unit": "iter/sec",
            "range": "stddev: 0.0003580387710357878",
            "extra": "mean: 40.185346590907955 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11655.72178237346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030434686289513365",
            "extra": "mean: 85.7947726165071 usec\nrounds: 5339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5586.808260498322,
            "unit": "iter/sec",
            "range": "stddev: 0.00004700202964006483",
            "extra": "mean: 178.99307679315342 usec\nrounds: 2370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.24054829960286,
            "unit": "iter/sec",
            "range": "stddev: 0.012558690754650433",
            "extra": "mean: 8.677501233334953 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.50989577969955,
            "unit": "iter/sec",
            "range": "stddev: 0.000214005068552444",
            "extra": "mean: 3.1795501935508454 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6314496.8744665915,
            "unit": "iter/sec",
            "range": "stddev: 1.1045811874706575e-8",
            "extra": "mean: 158.36574471090105 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 351.2223818432493,
            "unit": "iter/sec",
            "range": "stddev: 0.00013223829781970717",
            "extra": "mean: 2.8471989591093325 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7028160.115167529,
            "unit": "iter/sec",
            "range": "stddev: 5.9971954928642985e-9",
            "extra": "mean: 142.28474929619136 nsec\nrounds: 51814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.01400693705685,
            "unit": "iter/sec",
            "range": "stddev: 0.00013587345549275455",
            "extra": "mean: 5.262769919542065 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.36446457187732,
            "unit": "iter/sec",
            "range": "stddev: 0.0007118758092984354",
            "extra": "mean: 8.448481591303493 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1746.1630321245682,
            "unit": "iter/sec",
            "range": "stddev: 0.000011613467096541364",
            "extra": "mean: 572.6842119565969 usec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.50068933906776,
            "unit": "iter/sec",
            "range": "stddev: 0.0007657374443465183",
            "extra": "mean: 10.152213215053875 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.576029575753987,
            "unit": "iter/sec",
            "range": "stddev: 0.001949920870462576",
            "extra": "mean: 388.1943008000235 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.49066784767158,
            "unit": "iter/sec",
            "range": "stddev: 0.00022166298429038755",
            "extra": "mean: 21.509693155549787 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5753.700391569829,
            "unit": "iter/sec",
            "range": "stddev: 0.000044734795799502293",
            "extra": "mean: 173.80119435227698 usec\nrounds: 2408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.0778268452325,
            "unit": "iter/sec",
            "range": "stddev: 0.00022939863525654798",
            "extra": "mean: 13.684041290908183 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17916699292707375,
            "unit": "iter/sec",
            "range": "stddev: 0.07184827699396948",
            "extra": "mean: 5.581385185199986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5629.176712923762,
            "unit": "iter/sec",
            "range": "stddev: 0.000047196755650481614",
            "extra": "mean: 177.6458709679778 usec\nrounds: 2418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.05481736968144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000768997867991682",
            "extra": "mean: 6.170751454545086 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 731.346646919691,
            "unit": "iter/sec",
            "range": "stddev: 0.000016532261080871007",
            "extra": "mean: 1.3673406505818162 msec\nrounds: 601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.98897409505008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000635634941093112",
            "extra": "mean: 7.042800374982505 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1878017.1663940041,
            "unit": "iter/sec",
            "range": "stddev: 1.2685291811404737e-7",
            "extra": "mean: 532.4764958991872 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.84530555590064,
            "unit": "iter/sec",
            "range": "stddev: 0.00032082182949463216",
            "extra": "mean: 10.655834024690048 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.7505004999559,
            "unit": "iter/sec",
            "range": "stddev: 0.00021265669458605892",
            "extra": "mean: 3.1872459116607548 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.75846574772262,
            "unit": "iter/sec",
            "range": "stddev: 0.0041442256640956895",
            "extra": "mean: 6.106554524885117 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 102.19870778991925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007339488443771094",
            "extra": "mean: 9.784859531253668 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.343803113644846,
            "unit": "iter/sec",
            "range": "stddev: 0.03039217388877952",
            "extra": "mean: 32.95565807142761 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 282.1498551425853,
            "unit": "iter/sec",
            "range": "stddev: 0.00015942524143995864",
            "extra": "mean: 3.5442158901504555 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.537545197409315,
            "unit": "iter/sec",
            "range": "stddev: 0.001226888187045495",
            "extra": "mean: 180.58543349999923 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.19390702658906,
            "unit": "iter/sec",
            "range": "stddev: 0.0007431078251919185",
            "extra": "mean: 8.460673017391992 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.16555771232623,
            "unit": "iter/sec",
            "range": "stddev: 0.000060664297649776206",
            "extra": "mean: 3.0848434579451176 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 295.1937861190878,
            "unit": "iter/sec",
            "range": "stddev: 0.00027093470363646064",
            "extra": "mean: 3.3876051835202845 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 114.9016138304182,
            "unit": "iter/sec",
            "range": "stddev: 0.00013928341580338454",
            "extra": "mean: 8.703097951921608 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 118.61343689054083,
            "unit": "iter/sec",
            "range": "stddev: 0.0006812580244530013",
            "extra": "mean: 8.430748035088323 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2495980.6275469265,
            "unit": "iter/sec",
            "range": "stddev: 1.8401170917808038e-8",
            "extra": "mean: 400.6441352001552 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.257244915208467,
            "unit": "iter/sec",
            "range": "stddev: 0.001191652306711953",
            "extra": "mean: 65.54263273333163 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.77277976634699,
            "unit": "iter/sec",
            "range": "stddev: 0.000052625316145985135",
            "extra": "mean: 6.298308825175316 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.31299376534247,
            "unit": "iter/sec",
            "range": "stddev: 0.0006650678111214813",
            "extra": "mean: 10.0691758659779 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69443.50580420744,
            "unit": "iter/sec",
            "range": "stddev: 8.196532054399844e-7",
            "extra": "mean: 14.400194639070369 usec\nrounds: 13281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 474504.5671854945,
            "unit": "iter/sec",
            "range": "stddev: 3.1477126234202516e-7",
            "extra": "mean: 2.107461274675313 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139088.53267411276,
            "unit": "iter/sec",
            "range": "stddev: 4.016937895411327e-7",
            "extra": "mean: 7.189665321605054 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5516.527186696818,
            "unit": "iter/sec",
            "range": "stddev: 0.000050578705367472564",
            "extra": "mean: 181.27346538081312 usec\nrounds: 2282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.66092581594462,
            "unit": "iter/sec",
            "range": "stddev: 0.062120813753381736",
            "extra": "mean: 1.5130291113999874 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2558145.230346,
            "unit": "iter/sec",
            "range": "stddev: 1.925641671276365e-8",
            "extra": "mean: 390.9082205877467 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.4166459285134,
            "unit": "iter/sec",
            "range": "stddev: 0.00029570183473061465",
            "extra": "mean: 3.5408677725502224 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.4786399996833,
            "unit": "iter/sec",
            "range": "stddev: 0.00022381573439585143",
            "extra": "mean: 3.231240773195279 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.10459086241394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007696034777154838",
            "extra": "mean: 9.793878919190824 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12769628.435943032,
            "unit": "iter/sec",
            "range": "stddev: 5.127589403973512e-9",
            "extra": "mean: 78.31081421170336 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.4735422448277,
            "unit": "iter/sec",
            "range": "stddev: 0.00013014819752599698",
            "extra": "mean: 10.932122835294969 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.01528256779426,
            "unit": "iter/sec",
            "range": "stddev: 0.0008277079008874037",
            "extra": "mean: 9.998471976741763 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 117.36018406981911,
            "unit": "iter/sec",
            "range": "stddev: 0.0007085200205572313",
            "extra": "mean: 8.520777365218573 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.05207514183634,
            "unit": "iter/sec",
            "range": "stddev: 0.015557280362243343",
            "extra": "mean: 10.520548851856246 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.125475160383715,
            "unit": "iter/sec",
            "range": "stddev: 0.000637183326506262",
            "extra": "mean: 28.469365764704314 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5744.871273132503,
            "unit": "iter/sec",
            "range": "stddev: 0.00004854075532232683",
            "extra": "mean: 174.06830413707954 usec\nrounds: 2466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5243.421314320061,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863699705330396",
            "extra": "mean: 190.7151724140395 usec\nrounds: 3045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8527002263994725,
            "unit": "iter/sec",
            "range": "stddev: 0.0023566034466111566",
            "extra": "mean: 1.1727450856000132 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.8474530671316,
            "unit": "iter/sec",
            "range": "stddev: 0.000020297232855742337",
            "extra": "mean: 1.8320136777793374 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5329.73567146757,
            "unit": "iter/sec",
            "range": "stddev: 0.000021238928061156298",
            "extra": "mean: 187.62656567631333 usec\nrounds: 2459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.00453679227793,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041212683342032",
            "extra": "mean: 10.203609268819003 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1192.9311092307623,
            "unit": "iter/sec",
            "range": "stddev: 0.000012908000960734248",
            "extra": "mean: 838.2713739813777 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.41262546195277,
            "unit": "iter/sec",
            "range": "stddev: 0.0001665135788015587",
            "extra": "mean: 25.372580189192327 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.915284691856642,
            "unit": "iter/sec",
            "range": "stddev: 0.004640046664927276",
            "extra": "mean: 1.0925562384000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.28857818601946,
            "unit": "iter/sec",
            "range": "stddev: 0.00415258870112442",
            "extra": "mean: 4.232113154503577 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5501.3223744002125,
            "unit": "iter/sec",
            "range": "stddev: 0.00004134103846216182",
            "extra": "mean: 181.77447746988761 usec\nrounds: 2419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11674.83067390423,
            "unit": "iter/sec",
            "range": "stddev: 0.000011879415669041944",
            "extra": "mean: 85.6543471962481 usec\nrounds: 4905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.10861189944975,
            "unit": "iter/sec",
            "range": "stddev: 0.0001378189176380669",
            "extra": "mean: 18.829337921565237 msec\nrounds: 51"
          }
        ]
      }
    ]
  }
}