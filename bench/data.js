window.BENCHMARK_DATA = {
  "lastUpdate": 1683035607366,
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
          "id": "34a0c5918a3b18db611537977fa8a854e925fe67",
          "message": "fix(snowflake): ensure connection lifetime is greater than or equal to record batch reader lifetime",
          "timestamp": "2023-05-02T15:48:22+02:00",
          "tree_id": "5b8ddc85d0fb5eb9336cc08dd1edb44eef460c5c",
          "url": "https://github.com/ibis-project/ibis/commit/34a0c5918a3b18db611537977fa8a854e925fe67"
        },
        "date": 1683035519286,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.84936564304722,
            "unit": "iter/sec",
            "range": "stddev: 0.006726657275820342",
            "extra": "mean: 11.129739123287651 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6161401.5006702235,
            "unit": "iter/sec",
            "range": "stddev: 1.9888929908986228e-8",
            "extra": "mean: 162.30073626764562 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6395633.151098247,
            "unit": "iter/sec",
            "range": "stddev: 1.1806562232986718e-8",
            "extra": "mean: 156.356685315555 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6664576700999316,
            "unit": "iter/sec",
            "range": "stddev: 0.0013460254355000948",
            "extra": "mean: 600.0752481999939 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.79693938796947,
            "unit": "iter/sec",
            "range": "stddev: 0.0006416264050716109",
            "extra": "mean: 10.330905153849175 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.68975973580113,
            "unit": "iter/sec",
            "range": "stddev: 0.00010070642976301435",
            "extra": "mean: 9.1166213000065 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.80928269343505,
            "unit": "iter/sec",
            "range": "stddev: 0.000454561084951879",
            "extra": "mean: 33.54659722222137 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.21075402538827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002421737920959751",
            "extra": "mean: 3.7423643507438626 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4572788.152806635,
            "unit": "iter/sec",
            "range": "stddev: 1.6750614325909944e-8",
            "extra": "mean: 218.6849612497923 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5848367.557993763,
            "unit": "iter/sec",
            "range": "stddev: 1.0101471078632231e-8",
            "extra": "mean: 170.9878850955329 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.18730822285568,
            "unit": "iter/sec",
            "range": "stddev: 0.006317426434668391",
            "extra": "mean: 4.0952169352198995 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.24165047117948,
            "unit": "iter/sec",
            "range": "stddev: 0.00009905850798136277",
            "extra": "mean: 51.97059376469911 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3488804055096646,
            "unit": "iter/sec",
            "range": "stddev: 0.0014059149645321884",
            "extra": "mean: 741.3555685999881 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.24566779557097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458366502142117",
            "extra": "mean: 3.606909380951471 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.9616234127916,
            "unit": "iter/sec",
            "range": "stddev: 0.000017937836853310618",
            "extra": "mean: 841.7780341482639 usec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.4059284784393,
            "unit": "iter/sec",
            "range": "stddev: 0.00025573633627687116",
            "extra": "mean: 3.644236134200622 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.13585332468138,
            "unit": "iter/sec",
            "range": "stddev: 0.0006505429122600968",
            "extra": "mean: 16.35701385714177 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13604.552946773605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018627826433005324",
            "extra": "mean: 73.50480415728438 usec\nrounds: 6158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 442.6049725727874,
            "unit": "iter/sec",
            "range": "stddev: 0.00007004963612102705",
            "extra": "mean: 2.2593510284965173 msec\nrounds: 386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.44616793004138,
            "unit": "iter/sec",
            "range": "stddev: 0.010850685471319869",
            "extra": "mean: 10.935395354838981 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9314337125275282,
            "unit": "iter/sec",
            "range": "stddev: 0.004166696245558123",
            "extra": "mean: 1.0736137059999806 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2380.086579255181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000904447597573826",
            "extra": "mean: 420.15278297688553 usec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1032685.0415235027,
            "unit": "iter/sec",
            "range": "stddev: 1.5267511107615458e-7",
            "extra": "mean: 968.3494577637312 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8052.783131874789,
            "unit": "iter/sec",
            "range": "stddev: 0.00003473386404451152",
            "extra": "mean: 124.18066941872151 usec\nrounds: 3633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11770.031348520139,
            "unit": "iter/sec",
            "range": "stddev: 0.000013558310196329646",
            "extra": "mean: 84.9615409160088 usec\nrounds: 4888"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2398.639182077974,
            "unit": "iter/sec",
            "range": "stddev: 0.00007536226216225637",
            "extra": "mean: 416.9030538114058 usec\nrounds: 1115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.22697777632631,
            "unit": "iter/sec",
            "range": "stddev: 0.00007500558423892493",
            "extra": "mean: 9.503266378377136 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2442.471964957647,
            "unit": "iter/sec",
            "range": "stddev: 0.00007506651022436749",
            "extra": "mean: 409.42128071359065 usec\nrounds: 1457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.33817689716692,
            "unit": "iter/sec",
            "range": "stddev: 0.00007513132538706332",
            "extra": "mean: 7.978415074765648 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.08979366243048,
            "unit": "iter/sec",
            "range": "stddev: 0.000056966238788958336",
            "extra": "mean: 5.205898662983379 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.71272403060964,
            "unit": "iter/sec",
            "range": "stddev: 0.011654953155349776",
            "extra": "mean: 11.272340139786012 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2222.225780688397,
            "unit": "iter/sec",
            "range": "stddev: 0.0001101898642712946",
            "extra": "mean: 449.9992794117535 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.4632551104449,
            "unit": "iter/sec",
            "range": "stddev: 0.0007658136981276714",
            "extra": "mean: 9.855784726317706 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1604767.8963933082,
            "unit": "iter/sec",
            "range": "stddev: 1.0448336336298556e-7",
            "extra": "mean: 623.1430739906282 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.51349707584784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007320280800706023",
            "extra": "mean: 117.46054425001518 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.86282274704787,
            "unit": "iter/sec",
            "range": "stddev: 0.00022476268776929932",
            "extra": "mean: 20.465457044444214 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9240557805968902,
            "unit": "iter/sec",
            "range": "stddev: 0.00756176137135861",
            "extra": "mean: 1.082185752199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4720.2187790518155,
            "unit": "iter/sec",
            "range": "stddev: 0.000024164721156673563",
            "extra": "mean: 211.85458700303658 usec\nrounds: 954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.1738018150642,
            "unit": "iter/sec",
            "range": "stddev: 0.000026596152523349532",
            "extra": "mean: 1.8444270022864375 msec\nrounds: 437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.56851263744159,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314713896898575",
            "extra": "mean: 9.943470115791497 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 411.82537137123774,
            "unit": "iter/sec",
            "range": "stddev: 0.00013709736244678434",
            "extra": "mean: 2.428213678701586 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.92814915659623,
            "unit": "iter/sec",
            "range": "stddev: 0.0008540264390009113",
            "extra": "mean: 10.534283127656591 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.22013743683712,
            "unit": "iter/sec",
            "range": "stddev: 0.0008707642426113441",
            "extra": "mean: 10.078599222225362 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.3782648919338,
            "unit": "iter/sec",
            "range": "stddev: 0.000021005345385264635",
            "extra": "mean: 1.4784626471694382 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.0441218716764,
            "unit": "iter/sec",
            "range": "stddev: 0.0001168564174132651",
            "extra": "mean: 6.491646600011336 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139908.24372980517,
            "unit": "iter/sec",
            "range": "stddev: 3.657559147783956e-7",
            "extra": "mean: 7.147541655452618 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1820369.1706268839,
            "unit": "iter/sec",
            "range": "stddev: 1.7383734267881537e-7",
            "extra": "mean: 549.3391209518387 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2321.0938783234574,
            "unit": "iter/sec",
            "range": "stddev: 0.00007959913794095867",
            "extra": "mean: 430.8313460902785 usec\nrounds: 1202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12202028.021066409,
            "unit": "iter/sec",
            "range": "stddev: 4.197990014235902e-9",
            "extra": "mean: 81.95358986821385 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.5712603583716,
            "unit": "iter/sec",
            "range": "stddev: 0.00023856812361459497",
            "extra": "mean: 3.897552666667451 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.9601314939053,
            "unit": "iter/sec",
            "range": "stddev: 0.0002774891828954206",
            "extra": "mean: 3.5976382462674383 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2289.168627705618,
            "unit": "iter/sec",
            "range": "stddev: 0.00008833399943789214",
            "extra": "mean: 436.8398150739456 usec\nrounds: 1141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.93972884963563,
            "unit": "iter/sec",
            "range": "stddev: 0.003730651578636781",
            "extra": "mean: 5.7491178502667575 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.17560747342988,
            "unit": "iter/sec",
            "range": "stddev: 0.02932806827014199",
            "extra": "mean: 28.42879119444793 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.1151248370676,
            "unit": "iter/sec",
            "range": "stddev: 0.00012060696780565038",
            "extra": "mean: 5.205212243690327 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.2363233183348,
            "unit": "iter/sec",
            "range": "stddev: 0.00037053998944473906",
            "extra": "mean: 3.813354257510988 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.08146948347985,
            "unit": "iter/sec",
            "range": "stddev: 0.0009278892184283952",
            "extra": "mean: 10.092704571430817 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.6574769515817,
            "unit": "iter/sec",
            "range": "stddev: 0.00009717920311372247",
            "extra": "mean: 1.3410983339002096 msec\nrounds: 590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.69217666898118,
            "unit": "iter/sec",
            "range": "stddev: 0.00006176811268799072",
            "extra": "mean: 5.8584993144663775 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.255738438055744,
            "unit": "iter/sec",
            "range": "stddev: 0.00014664690803275262",
            "extra": "mean: 18.431230111109976 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.5584986869167,
            "unit": "iter/sec",
            "range": "stddev: 0.000006070633777576077",
            "extra": "mean: 568.3243840692181 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.80365903393421,
            "unit": "iter/sec",
            "range": "stddev: 0.00011875537641822501",
            "extra": "mean: 10.019672722219438 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.07414690841,
            "unit": "iter/sec",
            "range": "stddev: 0.00003789525624585119",
            "extra": "mean: 7.458559484127313 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.91599240719333,
            "unit": "iter/sec",
            "range": "stddev: 0.0008182099040100406",
            "extra": "mean: 9.909232185569032 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.87655194671786,
            "unit": "iter/sec",
            "range": "stddev: 0.0007957339907497504",
            "extra": "mean: 38.64502512000399 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17856062713298904,
            "unit": "iter/sec",
            "range": "stddev: 0.12848568057430135",
            "extra": "mean: 5.600338753600011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1866923.42131214,
            "unit": "iter/sec",
            "range": "stddev: 9.657240667030387e-8",
            "extra": "mean: 535.6406098848793 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2339.6088707475546,
            "unit": "iter/sec",
            "range": "stddev: 0.00010025227830940013",
            "extra": "mean: 427.4218705968912 usec\nrounds: 1391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.548344851217315,
            "unit": "iter/sec",
            "range": "stddev: 0.0002991375518683747",
            "extra": "mean: 17.37669437036549 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.48550318032437,
            "unit": "iter/sec",
            "range": "stddev: 0.0007419570409050457",
            "extra": "mean: 10.051715757897215 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.83691438341339,
            "unit": "iter/sec",
            "range": "stddev: 0.0008467322417897471",
            "extra": "mean: 10.016335202023603 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.3159826801672,
            "unit": "iter/sec",
            "range": "stddev: 0.0007545513874553059",
            "extra": "mean: 9.67904455882374 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2262.1995135394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008673751546347107",
            "extra": "mean: 442.047659375285 usec\nrounds: 1920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.82607825253157,
            "unit": "iter/sec",
            "range": "stddev: 0.00008520445760153284",
            "extra": "mean: 6.179473733766741 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9835.61445220239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018750208312761176",
            "extra": "mean: 101.67132972318574 usec\nrounds: 4986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.463263068858204,
            "unit": "iter/sec",
            "range": "stddev: 0.000595030892423666",
            "extra": "mean: 24.71377551282144 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.25761118917796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007114911578971252",
            "extra": "mean: 10.07479414444169 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 251.14143639051818,
            "unit": "iter/sec",
            "range": "stddev: 0.003941366759326691",
            "extra": "mean: 3.981820022901465 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.59956828928147,
            "unit": "iter/sec",
            "range": "stddev: 0.03848408104958676",
            "extra": "mean: 28.90209472092714 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.65032083987995,
            "unit": "iter/sec",
            "range": "stddev: 0.00032059156348180105",
            "extra": "mean: 3.62778464016692 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4863558883452126,
            "unit": "iter/sec",
            "range": "stddev: 0.0025316866021561353",
            "extra": "mean: 402.19503760000634 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 113.8766766013566,
            "unit": "iter/sec",
            "range": "stddev: 0.00019480813660631674",
            "extra": "mean: 8.781429436166801 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7859462443310709,
            "unit": "iter/sec",
            "range": "stddev: 0.002802084447791762",
            "extra": "mean: 1.2723516490000066 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1900256.585429766,
            "unit": "iter/sec",
            "range": "stddev: 1.2699881748463902e-7",
            "extra": "mean: 526.2447227745498 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.22432712492035,
            "unit": "iter/sec",
            "range": "stddev: 0.000813127508519905",
            "extra": "mean: 9.687638833332542 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.45953407882305,
            "unit": "iter/sec",
            "range": "stddev: 0.0008936490677677984",
            "extra": "mean: 10.054340282827852 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7366643.255817793,
            "unit": "iter/sec",
            "range": "stddev: 4.7815116011807474e-9",
            "extra": "mean: 135.74703773132384 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.69007098755294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001385045335150353",
            "extra": "mean: 9.461626722890266 msec\nrounds: 83"
          }
        ]
      }
    ]
  }
}