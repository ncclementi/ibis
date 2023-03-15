window.BENCHMARK_DATA = {
  "lastUpdate": 1678878058386,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "22198669b41ca348b13dec52112cffd0906391f0",
          "message": "feat(snowflake): implement ops.GroupConcat",
          "timestamp": "2023-03-15T06:55:31-04:00",
          "tree_id": "8ff4df5d29fdd3408e866e35d729b0776f125b4e",
          "url": "https://github.com/ibis-project/ibis/commit/22198669b41ca348b13dec52112cffd0906391f0"
        },
        "date": 1678877978476,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6024761.70298787,
            "unit": "iter/sec",
            "range": "stddev: 1.616757028110625e-7",
            "extra": "mean: 165.98166853675565 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8335.161653365667,
            "unit": "iter/sec",
            "range": "stddev: 0.000014797030014812522",
            "extra": "mean: 119.97367796654652 usec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.55782669702715,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449611611708646",
            "extra": "mean: 8.159413616823352 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13611.187256247202,
            "unit": "iter/sec",
            "range": "stddev: 0.000004052723782037279",
            "extra": "mean: 73.46897674492169 usec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.30793222070227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005594492977622721",
            "extra": "mean: 15.081151930232956 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.7069563379776,
            "unit": "iter/sec",
            "range": "stddev: 0.00006428906856391746",
            "extra": "mean: 15.219088749999147 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5185.312402839758,
            "unit": "iter/sec",
            "range": "stddev: 0.000047633829932634053",
            "extra": "mean: 192.85241125536544 usec\nrounds: 2310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.57509267590106,
            "unit": "iter/sec",
            "range": "stddev: 0.00029454719222860525",
            "extra": "mean: 7.216304031914281 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5080.993455166725,
            "unit": "iter/sec",
            "range": "stddev: 0.00004690245044053247",
            "extra": "mean: 196.8119047630591 usec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.3805625543674,
            "unit": "iter/sec",
            "range": "stddev: 0.000033512971353803693",
            "extra": "mean: 5.066354999999331 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.19614397680115,
            "unit": "iter/sec",
            "range": "stddev: 0.018767839797086835",
            "extra": "mean: 12.954014909093365 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5605.273309200877,
            "unit": "iter/sec",
            "range": "stddev: 0.00005052565594138086",
            "extra": "mean: 178.40343277437196 usec\nrounds: 3399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5211.704375301153,
            "unit": "iter/sec",
            "range": "stddev: 0.000022038079425562035",
            "extra": "mean: 191.87581028945374 usec\nrounds: 2177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.26776750277092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005212069220764854",
            "extra": "mean: 9.590691581398104 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.36184758430994,
            "unit": "iter/sec",
            "range": "stddev: 0.00017004417975229638",
            "extra": "mean: 6.395421999991413 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483858.7040740569,
            "unit": "iter/sec",
            "range": "stddev: 3.747712534193261e-7",
            "extra": "mean: 2.066719047482393 usec\nrounds: 2310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.04000575137917,
            "unit": "iter/sec",
            "range": "stddev: 0.00006139473971103074",
            "extra": "mean: 8.925383333333954 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73930.90256277031,
            "unit": "iter/sec",
            "range": "stddev: 5.958492885186166e-7",
            "extra": "mean: 13.526143538569137 usec\nrounds: 14045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1933874.665285884,
            "unit": "iter/sec",
            "range": "stddev: 7.487093459624944e-8",
            "extra": "mean: 517.0965926337167 nsec\nrounds: 142837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5143.695671909888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000774953468482088",
            "extra": "mean: 194.41274596805476 usec\nrounds: 1736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8426463461390215,
            "unit": "iter/sec",
            "range": "stddev: 0.006710296232090343",
            "extra": "mean: 1.1867374784000049 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12049097.717868188,
            "unit": "iter/sec",
            "range": "stddev: 3.4923183762254053e-9",
            "extra": "mean: 82.99376628973836 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1950387.266816504,
            "unit": "iter/sec",
            "range": "stddev: 1.069585045027716e-7",
            "extra": "mean: 512.7186877261754 nsec\nrounds: 89278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1680888487611023,
            "unit": "iter/sec",
            "range": "stddev: 0.07285412514222549",
            "extra": "mean: 5.9492346301999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.23459758180542,
            "unit": "iter/sec",
            "range": "stddev: 0.0005890190727153612",
            "extra": "mean: 9.15460872413709 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5861542478018946,
            "unit": "iter/sec",
            "range": "stddev: 0.0027744427640850285",
            "extra": "mean: 386.6745384000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.46560273739705,
            "unit": "iter/sec",
            "range": "stddev: 0.0005660408550751559",
            "extra": "mean: 8.232783417392273 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5489.53361154506,
            "unit": "iter/sec",
            "range": "stddev: 0.00005108891774122589",
            "extra": "mean: 182.1648378100639 usec\nrounds: 2904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1833685.2555404066,
            "unit": "iter/sec",
            "range": "stddev: 8.855660295421299e-8",
            "extra": "mean: 545.3498614217135 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.45374156479033,
            "unit": "iter/sec",
            "range": "stddev: 0.0006053462524301404",
            "extra": "mean: 8.233587431034747 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.98849262621727,
            "unit": "iter/sec",
            "range": "stddev: 0.00014561656602004217",
            "extra": "mean: 6.211624096150759 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.9418307615695,
            "unit": "iter/sec",
            "range": "stddev: 0.000014068310983973807",
            "extra": "mean: 1.3370023695315714 msec\nrounds: 663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.9928239322261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001931786843647225",
            "extra": "mean: 1.4684442550007286 msec\nrounds: 600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5346.544419607746,
            "unit": "iter/sec",
            "range": "stddev: 0.00004717334450670281",
            "extra": "mean: 187.03669539013498 usec\nrounds: 2321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9006734247110719,
            "unit": "iter/sec",
            "range": "stddev: 0.0028591266967764256",
            "extra": "mean: 1.1102803441999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7178803545828611,
            "unit": "iter/sec",
            "range": "stddev: 0.0021478435970400792",
            "extra": "mean: 582.1127165999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 212.56857149204401,
            "unit": "iter/sec",
            "range": "stddev: 0.0036739350893585185",
            "extra": "mean: 4.7043643045671395 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6965096.337892388,
            "unit": "iter/sec",
            "range": "stddev: 4.95074778087038e-9",
            "extra": "mean: 143.57303208570414 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11990.833431393652,
            "unit": "iter/sec",
            "range": "stddev: 0.000028684063646369843",
            "extra": "mean: 83.39703872308512 usec\nrounds: 3383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147822.53983782692,
            "unit": "iter/sec",
            "range": "stddev: 3.014912867638232e-7",
            "extra": "mean: 6.764868206817983 usec\nrounds: 32680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12633.46071982118,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016129187580605786",
            "extra": "mean: 79.15487467587222 usec\nrounds: 4245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.22207484902856,
            "unit": "iter/sec",
            "range": "stddev: 0.000056502834012525026",
            "extra": "mean: 3.422054957746202 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5469.710499565842,
            "unit": "iter/sec",
            "range": "stddev: 0.000043482190538444677",
            "extra": "mean: 182.8250325276584 usec\nrounds: 2152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.61487313391463,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858749524902394",
            "extra": "mean: 8.222678478633636 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.02855441934784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007402522543250472",
            "extra": "mean: 26.29602979310801 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.747393789685916,
            "unit": "iter/sec",
            "range": "stddev: 0.0005156059696325812",
            "extra": "mean: 22.34767022857308 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 318.2271442040889,
            "unit": "iter/sec",
            "range": "stddev: 0.0001920653918028645",
            "extra": "mean: 3.1424094965282694 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.671845565274256,
            "unit": "iter/sec",
            "range": "stddev: 0.09068136239135594",
            "extra": "mean: 1.488437301199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.35892954572185,
            "unit": "iter/sec",
            "range": "stddev: 0.0005844845313618041",
            "extra": "mean: 8.744398045455558 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.0934256683547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005849890794006358",
            "extra": "mean: 9.251256436891323 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.36169610567366,
            "unit": "iter/sec",
            "range": "stddev: 0.00015766976041557205",
            "extra": "mean: 10.486390666666255 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.6737063248241,
            "unit": "iter/sec",
            "range": "stddev: 0.000060545002299484344",
            "extra": "mean: 1.870299564333694 msec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.61838762635666,
            "unit": "iter/sec",
            "range": "stddev: 0.00009078648891984334",
            "extra": "mean: 9.650796764044967 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9032685391188224,
            "unit": "iter/sec",
            "range": "stddev: 0.005849984855361997",
            "extra": "mean: 1.1070904794000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.501546209476725,
            "unit": "iter/sec",
            "range": "stddev: 0.00029260923979298694",
            "extra": "mean: 95.22407272727017 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.830910565193243,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199523621146753",
            "extra": "mean: 38.71330813043365 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 254.42706000676387,
            "unit": "iter/sec",
            "range": "stddev: 0.01084860494432962",
            "extra": "mean: 3.9303995415165955 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.3638407687289,
            "unit": "iter/sec",
            "range": "stddev: 0.00020800750552910685",
            "extra": "mean: 3.2013948782899937 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.43108921253366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002212844285955315",
            "extra": "mean: 3.3396665744691876 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1732.9727200456605,
            "unit": "iter/sec",
            "range": "stddev: 0.000018813022848194864",
            "extra": "mean: 577.0431285113663 usec\nrounds: 1424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.172611163291755,
            "unit": "iter/sec",
            "range": "stddev: 0.00017410115980145464",
            "extra": "mean: 16.899710530610463 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.071245273369,
            "unit": "iter/sec",
            "range": "stddev: 0.00011410788146984129",
            "extra": "mean: 13.320679527274914 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.38530874988504,
            "unit": "iter/sec",
            "range": "stddev: 0.0002729908842627413",
            "extra": "mean: 3.541260713692872 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 313.3367885730967,
            "unit": "iter/sec",
            "range": "stddev: 0.00019685399477420448",
            "extra": "mean: 3.191454168385067 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.39502047443828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858533053095465",
            "extra": "mean: 9.22551603960276 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5520278.511546031,
            "unit": "iter/sec",
            "range": "stddev: 9.36574620782633e-9",
            "extra": "mean: 181.1502803540889 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.8262336114474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566018867468991",
            "extra": "mean: 3.426696728476618 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 101.15754380202283,
            "unit": "iter/sec",
            "range": "stddev: 0.01742456753671982",
            "extra": "mean: 9.885570194914155 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.5165081188393,
            "unit": "iter/sec",
            "range": "stddev: 0.000012901244328524839",
            "extra": "mean: 862.4284285718074 usec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5498.772953387381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000481116692064598",
            "extra": "mean: 181.85875439428267 usec\nrounds: 2105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.26070920511985,
            "unit": "iter/sec",
            "range": "stddev: 0.0004504442586175699",
            "extra": "mean: 27.5780596111122 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.826961494769,
            "unit": "iter/sec",
            "range": "stddev: 0.00001155931875374972",
            "extra": "mean: 2.968883475248552 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 759834.2869247822,
            "unit": "iter/sec",
            "range": "stddev: 2.679059046272955e-7",
            "extra": "mean: 1.3160764356228536 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.03410850605925,
            "unit": "iter/sec",
            "range": "stddev: 0.000613253402955243",
            "extra": "mean: 9.43092759574487 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6315245717381455,
            "unit": "iter/sec",
            "range": "stddev: 0.0005269735994061364",
            "extra": "mean: 177.57180800000563 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.03665027692242,
            "unit": "iter/sec",
            "range": "stddev: 0.00007076638013074355",
            "extra": "mean: 8.400774027777473 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 92.41143855848856,
            "unit": "iter/sec",
            "range": "stddev: 0.02223846434632771",
            "extra": "mean: 10.82117122727275 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.40541362077742,
            "unit": "iter/sec",
            "range": "stddev: 0.00042885300335284993",
            "extra": "mean: 10.26636983333636 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 122.0385013827429,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936902285384444",
            "extra": "mean: 8.194135364410556 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.31081616811673,
            "unit": "iter/sec",
            "range": "stddev: 0.0006702633614366644",
            "extra": "mean: 9.679528602045979 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 152.7638389867493,
            "unit": "iter/sec",
            "range": "stddev: 0.0040437664682305705",
            "extra": "mean: 6.546051779222043 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.533767302388094,
            "unit": "iter/sec",
            "range": "stddev: 0.00015274437675157293",
            "extra": "mean: 64.37588387501236 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.0168865027979,
            "unit": "iter/sec",
            "range": "stddev: 0.00013122304093020015",
            "extra": "mean: 6.134333819354578 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 306.2665696240266,
            "unit": "iter/sec",
            "range": "stddev: 0.00026684221965987833",
            "extra": "mean: 3.2651294629629404 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.39894863185334,
            "unit": "iter/sec",
            "range": "stddev: 0.00024762885887637075",
            "extra": "mean: 20.661605846162097 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.8583460864869,
            "unit": "iter/sec",
            "range": "stddev: 0.025891740763979983",
            "extra": "mean: 13.539431262501012 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 318.8610242397869,
            "unit": "iter/sec",
            "range": "stddev: 0.00021417557522040661",
            "extra": "mean: 3.136162540982084 msec\nrounds: 305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1911859.0546380267,
            "unit": "iter/sec",
            "range": "stddev: 3.1477143752486955e-7",
            "extra": "mean: 523.051109638064 nsec\nrounds: 185151"
          }
        ]
      }
    ]
  }
}