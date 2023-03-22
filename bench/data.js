window.BENCHMARK_DATA = {
  "lastUpdate": 1679482194041,
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
      }
    ]
  }
}