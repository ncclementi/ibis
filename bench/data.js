window.BENCHMARK_DATA = {
  "lastUpdate": 1679704408979,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "2a203eab8f0f51807a8ceea1303b85521494df0b",
          "message": "chore(flake/nixpkgs): `fedc9837` -> `aace3ac6`",
          "timestamp": "2023-03-25T00:25:07Z",
          "tree_id": "94cb161f7f8ab8dcc5ec8875eb2a54e940567edf",
          "url": "https://github.com/ibis-project/ibis/commit/2a203eab8f0f51807a8ceea1303b85521494df0b"
        },
        "date": 1679704331360,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 149.93041492211503,
            "unit": "iter/sec",
            "range": "stddev: 0.004254831548852429",
            "extra": "mean: 6.669760772152029 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8848665324511363,
            "unit": "iter/sec",
            "range": "stddev: 0.005542973349656452",
            "extra": "mean: 1.1301139362000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13771.575610692491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016982141839840335",
            "extra": "mean: 72.61333258219071 usec\nrounds: 6212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148480.29906292158,
            "unit": "iter/sec",
            "range": "stddev: 3.8324559354815064e-7",
            "extra": "mean: 6.73490022791663 usec\nrounds: 38167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.125573698095974,
            "unit": "iter/sec",
            "range": "stddev: 0.03622633373451116",
            "extra": "mean: 195.1001115000016 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5383.1498099833325,
            "unit": "iter/sec",
            "range": "stddev: 0.00004316320264145435",
            "extra": "mean: 185.7648468458834 usec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7015631.171195739,
            "unit": "iter/sec",
            "range": "stddev: 4.703707950868142e-9",
            "extra": "mean: 142.53885011885984 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1967342.9174501672,
            "unit": "iter/sec",
            "range": "stddev: 1.1408462872136795e-7",
            "extra": "mean: 508.29979416912204 nsec\nrounds: 80652"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.02469824823515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158535700648063",
            "extra": "mean: 8.847623709675462 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16694602433292408,
            "unit": "iter/sec",
            "range": "stddev: 0.09131623251563027",
            "extra": "mean: 5.989959952599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.73770078441638,
            "unit": "iter/sec",
            "range": "stddev: 0.014401709819693562",
            "extra": "mean: 7.648903063156802 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.28089910049164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004008596845852765",
            "extra": "mean: 22.084367136365948 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1183.8369551995427,
            "unit": "iter/sec",
            "range": "stddev: 0.000012509946397431145",
            "extra": "mean: 844.7109169956974 usec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12730.523237673955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017684344574625688",
            "extra": "mean: 78.55136676870117 usec\nrounds: 4556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5744.543480220319,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785771592370909",
            "extra": "mean: 174.07823675514197 usec\nrounds: 1812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.92222183612017,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886095364472951",
            "extra": "mean: 9.811403067800965 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5239.774205409279,
            "unit": "iter/sec",
            "range": "stddev: 0.00005924944821429616",
            "extra": "mean: 190.84791840221862 usec\nrounds: 2304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.47790226911803,
            "unit": "iter/sec",
            "range": "stddev: 0.0006429308369812354",
            "extra": "mean: 9.304238163265056 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 204.0834470790942,
            "unit": "iter/sec",
            "range": "stddev: 0.004710227175078905",
            "extra": "mean: 4.899956436018262 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.02219309949079,
            "unit": "iter/sec",
            "range": "stddev: 0.0007039188594615087",
            "extra": "mean: 8.847819818181403 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.1396310730336,
            "unit": "iter/sec",
            "range": "stddev: 0.0007563661556421495",
            "extra": "mean: 9.790519012986872 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.2060258051244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002547784676072997",
            "extra": "mean: 3.319986701218867 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.234737347485606,
            "unit": "iter/sec",
            "range": "stddev: 0.0008378925057422644",
            "extra": "mean: 23.129549555553314 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.2817431491567,
            "unit": "iter/sec",
            "range": "stddev: 0.00028196998148720864",
            "extra": "mean: 3.2756626376815894 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1971668.0455663356,
            "unit": "iter/sec",
            "range": "stddev: 9.392508638204907e-8",
            "extra": "mean: 507.1847678663186 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71133.3996158632,
            "unit": "iter/sec",
            "range": "stddev: 6.265101816624297e-7",
            "extra": "mean: 14.058093742183432 usec\nrounds: 12225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.75740969635011,
            "unit": "iter/sec",
            "range": "stddev: 0.0009283024234904895",
            "extra": "mean: 10.78080989188456 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7934.451855965352,
            "unit": "iter/sec",
            "range": "stddev: 0.000014248117874578494",
            "extra": "mean: 126.03265079340936 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12167.148247247918,
            "unit": "iter/sec",
            "range": "stddev: 0.00001100204071988408",
            "extra": "mean: 82.18852763844556 usec\nrounds: 796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.4128401605036,
            "unit": "iter/sec",
            "range": "stddev: 0.00024485866097305936",
            "extra": "mean: 3.385093212118608 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.91110059045758,
            "unit": "iter/sec",
            "range": "stddev: 0.000068769134025077",
            "extra": "mean: 8.935664064814567 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.371670488884206,
            "unit": "iter/sec",
            "range": "stddev: 0.00043305171052841724",
            "extra": "mean: 18.736531775003584 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6133672.434568182,
            "unit": "iter/sec",
            "range": "stddev: 2.679663597041921e-8",
            "extra": "mean: 163.034464371268 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.46252046298136,
            "unit": "iter/sec",
            "range": "stddev: 0.000868478524368555",
            "extra": "mean: 9.482041540539628 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.773337830168,
            "unit": "iter/sec",
            "range": "stddev: 0.0003518079045653474",
            "extra": "mean: 3.561591737050447 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.30222446915074,
            "unit": "iter/sec",
            "range": "stddev: 0.0007599292816359128",
            "extra": "mean: 9.871451542552522 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.7256135473004,
            "unit": "iter/sec",
            "range": "stddev: 0.00033627758805556627",
            "extra": "mean: 15.942450674410951 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.13204989345857,
            "unit": "iter/sec",
            "range": "stddev: 0.0008089508255797895",
            "extra": "mean: 8.465103254382567 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.463316721209845,
            "unit": "iter/sec",
            "range": "stddev: 0.0002349761388496603",
            "extra": "mean: 95.57198990000302 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.15031336908147,
            "unit": "iter/sec",
            "range": "stddev: 0.00006488936696064921",
            "extra": "mean: 8.392760134019856 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.86931122058232,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909906265260055",
            "extra": "mean: 7.360013758931266 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5247.617977899957,
            "unit": "iter/sec",
            "range": "stddev: 0.00005879543081862811",
            "extra": "mean: 190.56265227603132 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.29540380149966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003710116841431678",
            "extra": "mean: 11.863043000005291 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.50836206308275,
            "unit": "iter/sec",
            "range": "stddev: 0.0012678944212578588",
            "extra": "mean: 26.6607216363692 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.091588760040864,
            "unit": "iter/sec",
            "range": "stddev: 0.0017672109031867265",
            "extra": "mean: 18.48716266102228 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6929813536025635,
            "unit": "iter/sec",
            "range": "stddev: 0.0015986989208469507",
            "extra": "mean: 590.6739598000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.67356065327186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008274473397772078",
            "extra": "mean: 9.739605733329881 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.31334093091496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008382325740436294",
            "extra": "mean: 9.586501506670023 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 285.40851805518787,
            "unit": "iter/sec",
            "range": "stddev: 0.00013615670529855707",
            "extra": "mean: 3.503749666667747 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5625.4787516727065,
            "unit": "iter/sec",
            "range": "stddev: 0.000050583349526007875",
            "extra": "mean: 177.76264814841855 usec\nrounds: 2484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1763335.5783946884,
            "unit": "iter/sec",
            "range": "stddev: 1.6400287576623335e-7",
            "extra": "mean: 567.1070284366311 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.75059087228,
            "unit": "iter/sec",
            "range": "stddev: 0.00000615777605075306",
            "extra": "mean: 569.8815576422764 usec\nrounds: 1171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.487096656529854,
            "unit": "iter/sec",
            "range": "stddev: 0.0025598930339011524",
            "extra": "mean: 402.0752459999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5444.909867887724,
            "unit": "iter/sec",
            "range": "stddev: 0.00004894503711337558",
            "extra": "mean: 183.65776923097826 usec\nrounds: 2132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.08472480329232,
            "unit": "iter/sec",
            "range": "stddev: 0.00013553771243086864",
            "extra": "mean: 6.406776840336312 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.59996680162841,
            "unit": "iter/sec",
            "range": "stddev: 0.0009788145162093625",
            "extra": "mean: 44.247852608701464 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6777143857988284,
            "unit": "iter/sec",
            "range": "stddev: 0.003199322047832794",
            "extra": "mean: 1.4755478428000175 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.64762442780423,
            "unit": "iter/sec",
            "range": "stddev: 0.00007278130950582678",
            "extra": "mean: 6.148260717105514 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.01238640936253,
            "unit": "iter/sec",
            "range": "stddev: 0.000248339669079648",
            "extra": "mean: 3.2361162334614484 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 95.64394849600643,
            "unit": "iter/sec",
            "range": "stddev: 0.019822723460680702",
            "extra": "mean: 10.455444549549881 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 309.76795467510647,
            "unit": "iter/sec",
            "range": "stddev: 0.00026312901886748816",
            "extra": "mean: 3.228222883961089 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.292495494476345,
            "unit": "iter/sec",
            "range": "stddev: 0.00026655668135483723",
            "extra": "mean: 65.39155106249339 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.0627203955936,
            "unit": "iter/sec",
            "range": "stddev: 0.000028531113393611363",
            "extra": "mean: 3.4835592675423905 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 471315.2961686967,
            "unit": "iter/sec",
            "range": "stddev: 3.900565602539368e-7",
            "extra": "mean: 2.1217219303700947 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.52332334520769,
            "unit": "iter/sec",
            "range": "stddev: 0.00023584055337423754",
            "extra": "mean: 10.360190318184369 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8250750919694089,
            "unit": "iter/sec",
            "range": "stddev: 0.003620097098250134",
            "extra": "mean: 1.2120108942000116 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.5374719388893,
            "unit": "iter/sec",
            "range": "stddev: 0.00024933590153506703",
            "extra": "mean: 3.3163374142854907 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12028896.90352933,
            "unit": "iter/sec",
            "range": "stddev: 3.8199979871038496e-9",
            "extra": "mean: 83.13314246678 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.4664912334867,
            "unit": "iter/sec",
            "range": "stddev: 0.00008004686482606041",
            "extra": "mean: 1.3414419182616097 msec\nrounds: 575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.10375128933582,
            "unit": "iter/sec",
            "range": "stddev: 0.018737455804142798",
            "extra": "mean: 10.298263318585331 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 762320.6868163699,
            "unit": "iter/sec",
            "range": "stddev: 8.333197138966418e-7",
            "extra": "mean: 1.3117838952740934 usec\nrounds: 25446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 117.08914620052563,
            "unit": "iter/sec",
            "range": "stddev: 0.0008688779936725253",
            "extra": "mean: 8.54050125438109 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 116.15170269630605,
            "unit": "iter/sec",
            "range": "stddev: 0.0008556581208133203",
            "extra": "mean: 8.609430398232146 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.313935968259,
            "unit": "iter/sec",
            "range": "stddev: 0.00009649154509025659",
            "extra": "mean: 1.8680627064027981 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.29126113851126,
            "unit": "iter/sec",
            "range": "stddev: 0.000037999051526959254",
            "extra": "mean: 5.1469118793103865 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 332.3947545735421,
            "unit": "iter/sec",
            "range": "stddev: 0.000012097013630837781",
            "extra": "mean: 3.008471061112219 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.45306253470523,
            "unit": "iter/sec",
            "range": "stddev: 0.00011032043350453286",
            "extra": "mean: 13.43128094339792 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5480.001490991651,
            "unit": "iter/sec",
            "range": "stddev: 0.00005315322277243743",
            "extra": "mean: 182.48170217542074 usec\nrounds: 2206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4848.094551115167,
            "unit": "iter/sec",
            "range": "stddev: 0.000058921410465409404",
            "extra": "mean: 206.26660422082287 usec\nrounds: 1895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.09392929217756,
            "unit": "iter/sec",
            "range": "stddev: 0.03418587820133827",
            "extra": "mean: 28.494956824994233 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5336.047023853114,
            "unit": "iter/sec",
            "range": "stddev: 0.00005567434196798533",
            "extra": "mean: 187.40464533573552 usec\nrounds: 1844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5546518.183239457,
            "unit": "iter/sec",
            "range": "stddev: 9.930410665913132e-9",
            "extra": "mean: 180.29328796267743 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.82534874014745,
            "unit": "iter/sec",
            "range": "stddev: 0.0003360933685699229",
            "extra": "mean: 10.435652081076489 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 118.13776861182285,
            "unit": "iter/sec",
            "range": "stddev: 0.0007392043975451957",
            "extra": "mean: 8.464693482452683 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1973910.4408924445,
            "unit": "iter/sec",
            "range": "stddev: 1.1564201355845098e-7",
            "extra": "mean: 506.6085974740982 nsec\nrounds: 163908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8775643117858973,
            "unit": "iter/sec",
            "range": "stddev: 0.0069843361943935246",
            "extra": "mean: 1.1395176246000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 304.64646535998793,
            "unit": "iter/sec",
            "range": "stddev: 0.00037803886924938225",
            "extra": "mean: 3.282493361012221 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.5563427100716,
            "unit": "iter/sec",
            "range": "stddev: 0.000043722796896747144",
            "extra": "mean: 1.4715483281518624 msec\nrounds: 579"
          }
        ]
      }
    ]
  }
}