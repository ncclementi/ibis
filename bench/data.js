window.BENCHMARK_DATA = {
  "lastUpdate": 1682210064249,
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
          "id": "93375f951c8b41546b83e6397af94864149ba678",
          "message": "chore(flake/nixpkgs): `d67390c8` -> `f362b87e`",
          "timestamp": "2023-04-23T00:28:34Z",
          "tree_id": "14b044acacd2af89bb2b08ea5a5f3992b98e8114",
          "url": "https://github.com/ibis-project/ibis/commit/93375f951c8b41546b83e6397af94864149ba678"
        },
        "date": 1682209984684,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.694748584248195,
            "unit": "iter/sec",
            "range": "stddev: 0.0008294906030541634",
            "extra": "mean: 85.50846500000117 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.121056993792774,
            "unit": "iter/sec",
            "range": "stddev: 0.0012719402420441814",
            "extra": "mean: 38.283290000003944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.53738015237037,
            "unit": "iter/sec",
            "range": "stddev: 0.008982191840533416",
            "extra": "mean: 11.423691207794521 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2192.478473524373,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474069867157271",
            "extra": "mean: 456.104820218607 usec\nrounds: 1919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1712400748123312,
            "unit": "iter/sec",
            "range": "stddev: 0.0772653116885939",
            "extra": "mean: 5.839754514799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2174.6157355133437,
            "unit": "iter/sec",
            "range": "stddev: 0.00008548874832393867",
            "extra": "mean: 459.85135841203606 usec\nrounds: 1183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14008.863662152398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015541112674637863",
            "extra": "mean: 71.38337727575218 usec\nrounds: 6645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.20131987161169,
            "unit": "iter/sec",
            "range": "stddev: 0.0005976915364532508",
            "extra": "mean: 21.18584825000689 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1979836.0393371005,
            "unit": "iter/sec",
            "range": "stddev: 8.34385939998206e-8",
            "extra": "mean: 505.0923309461653 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6371756235000168,
            "unit": "iter/sec",
            "range": "stddev: 0.001367264112763169",
            "extra": "mean: 610.8080193999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.99529502110316,
            "unit": "iter/sec",
            "range": "stddev: 0.00023551654383135358",
            "extra": "mean: 12.987806589037893 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71894.02186495825,
            "unit": "iter/sec",
            "range": "stddev: 9.074795853616027e-7",
            "extra": "mean: 13.909362337223873 usec\nrounds: 14205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.19188785141326,
            "unit": "iter/sec",
            "range": "stddev: 0.00009513645843392123",
            "extra": "mean: 8.320029062495848 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 261.3719467204784,
            "unit": "iter/sec",
            "range": "stddev: 0.00014037341502532845",
            "extra": "mean: 3.8259653055629568 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.62513407403617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003260084627828572",
            "extra": "mean: 3.7088530467838754 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.222858178091705,
            "unit": "iter/sec",
            "range": "stddev: 0.0009616217744843683",
            "extra": "mean: 24.861485366663295 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.0376661113908,
            "unit": "iter/sec",
            "range": "stddev: 0.0002602595607398375",
            "extra": "mean: 3.5330986640005904 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2191.1358423934935,
            "unit": "iter/sec",
            "range": "stddev: 0.00009038903829057173",
            "extra": "mean: 456.38430107904543 usec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7344904550412242,
            "unit": "iter/sec",
            "range": "stddev: 0.0033582787360318784",
            "extra": "mean: 1.3614880808000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9164941132486916,
            "unit": "iter/sec",
            "range": "stddev: 0.014058270705983497",
            "extra": "mean: 1.0911144824000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9156945379811371,
            "unit": "iter/sec",
            "range": "stddev: 0.00961400714885355",
            "extra": "mean: 1.0920672326000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2179.8482219807915,
            "unit": "iter/sec",
            "range": "stddev: 0.00008311293143508889",
            "extra": "mean: 458.7475356845335 usec\nrounds: 1191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.47970403083705,
            "unit": "iter/sec",
            "range": "stddev: 0.01939786902427379",
            "extra": "mean: 26.68110717142359 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.1857839440578,
            "unit": "iter/sec",
            "range": "stddev: 0.00029540743121560914",
            "extra": "mean: 3.6207511687225464 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1761.6073883076067,
            "unit": "iter/sec",
            "range": "stddev: 0.000007047244829162476",
            "extra": "mean: 567.6633775705889 usec\nrounds: 1070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.32367707185429,
            "unit": "iter/sec",
            "range": "stddev: 0.0007597365672571463",
            "extra": "mean: 9.96773672164922 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2262.466131210371,
            "unit": "iter/sec",
            "range": "stddev: 0.00007833780301431206",
            "extra": "mean: 441.9955667866822 usec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.8889157956203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000615322238997364",
            "extra": "mean: 1.4453187168782364 msec\nrounds: 551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 311.7777263447207,
            "unit": "iter/sec",
            "range": "stddev: 0.000047290550819818755",
            "extra": "mean: 3.207413216216537 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.39890081751173,
            "unit": "iter/sec",
            "range": "stddev: 0.00013872981567037494",
            "extra": "mean: 9.960268407894546 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.26303837145704,
            "unit": "iter/sec",
            "range": "stddev: 0.00006675663616295032",
            "extra": "mean: 8.907651302748373 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5541584.204019717,
            "unit": "iter/sec",
            "range": "stddev: 1.1105155395742122e-8",
            "extra": "mean: 180.45381305864322 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10409.794541293115,
            "unit": "iter/sec",
            "range": "stddev: 0.000026684042793169765",
            "extra": "mean: 96.06337531766299 usec\nrounds: 4724"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.3792305314145,
            "unit": "iter/sec",
            "range": "stddev: 0.000020741504275709088",
            "extra": "mean: 1.8302306239338364 msec\nrounds: 468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.162882962861676,
            "unit": "iter/sec",
            "range": "stddev: 0.00008725021017182162",
            "extra": "mean: 61.870150411764634 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.619573722258757,
            "unit": "iter/sec",
            "range": "stddev: 0.0024336727076369634",
            "extra": "mean: 381.74149920000673 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.71081039036112,
            "unit": "iter/sec",
            "range": "stddev: 0.00032572495650578435",
            "extra": "mean: 10.558456800004024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.98735233919894,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869978929189011",
            "extra": "mean: 10.418039206521835 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.1809549642218,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241703260582005",
            "extra": "mean: 1.3546813870976502 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1769865.1559207109,
            "unit": "iter/sec",
            "range": "stddev: 9.085565945958914e-8",
            "extra": "mean: 565.0147959886722 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6087694.287285424,
            "unit": "iter/sec",
            "range": "stddev: 1.1654566970841475e-8",
            "extra": "mean: 164.26580455691698 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.601495321655115,
            "unit": "iter/sec",
            "range": "stddev: 0.0005405939485072107",
            "extra": "mean: 19.010866399996 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 232.31168287002265,
            "unit": "iter/sec",
            "range": "stddev: 0.004001370765692289",
            "extra": "mean: 4.3045618181824095 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.27454109334184,
            "unit": "iter/sec",
            "range": "stddev: 0.00027079924704627423",
            "extra": "mean: 3.6327369615372955 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.7224406927675,
            "unit": "iter/sec",
            "range": "stddev: 0.00046787722380036204",
            "extra": "mean: 17.029264931816165 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6266272.34467193,
            "unit": "iter/sec",
            "range": "stddev: 6.141392223108789e-9",
            "extra": "mean: 159.5845097365647 nsec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.46319252507122,
            "unit": "iter/sec",
            "range": "stddev: 0.000717554139848364",
            "extra": "mean: 10.36664839534619 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505446.12196138274,
            "unit": "iter/sec",
            "range": "stddev: 2.978256607453407e-7",
            "extra": "mean: 1.9784502374249144 usec\nrounds: 2110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.70700268977142,
            "unit": "iter/sec",
            "range": "stddev: 0.0004405103546989591",
            "extra": "mean: 22.879628857140233 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.65192942357521,
            "unit": "iter/sec",
            "range": "stddev: 0.02142926581655829",
            "extra": "mean: 12.098931107526756 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1981681.3803266499,
            "unit": "iter/sec",
            "range": "stddev: 1.4729448356103767e-7",
            "extra": "mean: 504.6219891490152 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 298.0868450935044,
            "unit": "iter/sec",
            "range": "stddev: 0.00013859076122941507",
            "extra": "mean: 3.3547270416657207 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.73748011440155,
            "unit": "iter/sec",
            "range": "stddev: 0.0008012180188115552",
            "extra": "mean: 10.33725500000002 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.67956617814994,
            "unit": "iter/sec",
            "range": "stddev: 0.000041777121777099957",
            "extra": "mean: 7.5941926984107395 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.77952116180663,
            "unit": "iter/sec",
            "range": "stddev: 0.0008262450626759471",
            "extra": "mean: 10.02209660215104 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11504322.953541586,
            "unit": "iter/sec",
            "range": "stddev: 3.65631110265964e-9",
            "extra": "mean: 86.92384628271436 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.54742527725055,
            "unit": "iter/sec",
            "range": "stddev: 0.0008509334772222405",
            "extra": "mean: 9.945555515147097 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.9082948640375,
            "unit": "iter/sec",
            "range": "stddev: 0.00028597561028399505",
            "extra": "mean: 3.5854078864433956 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148296.08356782014,
            "unit": "iter/sec",
            "range": "stddev: 4.13429256761119e-7",
            "extra": "mean: 6.74326641635597 usec\nrounds: 38909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.7113234208849,
            "unit": "iter/sec",
            "range": "stddev: 0.00408564187328416",
            "extra": "mean: 6.145853767124142 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12235.895458907104,
            "unit": "iter/sec",
            "range": "stddev: 0.00001669211817516295",
            "extra": "mean: 81.72675251749158 usec\nrounds: 3972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.16602316617129,
            "unit": "iter/sec",
            "range": "stddev: 0.0007615859447084996",
            "extra": "mean: 10.39868310112021 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4450.539353868552,
            "unit": "iter/sec",
            "range": "stddev: 0.00004429510143353939",
            "extra": "mean: 224.69186776896328 usec\nrounds: 2057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.73750109740017,
            "unit": "iter/sec",
            "range": "stddev: 0.020273305000465845",
            "extra": "mean: 12.38581806976685 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 167.04667099633676,
            "unit": "iter/sec",
            "range": "stddev: 0.00003845294405692686",
            "extra": "mean: 5.986350964287876 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1986414.7644351362,
            "unit": "iter/sec",
            "range": "stddev: 8.625839608983578e-8",
            "extra": "mean: 503.4195364956238 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.74069937383122,
            "unit": "iter/sec",
            "range": "stddev: 0.000877614662242212",
            "extra": "mean: 10.025997474230346 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2180.413338249727,
            "unit": "iter/sec",
            "range": "stddev: 0.00009389765965373806",
            "extra": "mean: 458.62863818413683 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2208.353292427483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000901580675184015",
            "extra": "mean: 452.8260960005961 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.02099780790533,
            "unit": "iter/sec",
            "range": "stddev: 0.00006340913113329609",
            "extra": "mean: 6.17203951049367 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.0163337944698,
            "unit": "iter/sec",
            "range": "stddev: 0.000908367043746011",
            "extra": "mean: 16.389054173075124 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.2651754353585,
            "unit": "iter/sec",
            "range": "stddev: 0.00001086124635264158",
            "extra": "mean: 850.8718039990981 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7903475719784255,
            "unit": "iter/sec",
            "range": "stddev: 0.002466098672660608",
            "extra": "mean: 1.265266112600011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.09786806013877,
            "unit": "iter/sec",
            "range": "stddev: 0.000989559484502846",
            "extra": "mean: 10.741384532608485 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.4319028128902,
            "unit": "iter/sec",
            "range": "stddev: 0.00002075816991428241",
            "extra": "mean: 5.039512224719943 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2150.0013169147046,
            "unit": "iter/sec",
            "range": "stddev: 0.00008730204713546078",
            "extra": "mean: 465.11599417763165 usec\nrounds: 1374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.57022770548616,
            "unit": "iter/sec",
            "range": "stddev: 0.0008448137311993946",
            "extra": "mean: 9.943300545450086 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.921287835260175,
            "unit": "iter/sec",
            "range": "stddev: 0.00029175995887886915",
            "extra": "mean: 168.88218033333638 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.12599773608494,
            "unit": "iter/sec",
            "range": "stddev: 0.00007514976196175524",
            "extra": "mean: 6.055981575949445 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 105.58990557395532,
            "unit": "iter/sec",
            "range": "stddev: 0.00007908672077506723",
            "extra": "mean: 9.470602275513908 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 764217.2058275951,
            "unit": "iter/sec",
            "range": "stddev: 1.8010307219508244e-7",
            "extra": "mean: 1.30852850783053 usec\nrounds: 25642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.76637098807998,
            "unit": "iter/sec",
            "range": "stddev: 0.0007941056036780605",
            "extra": "mean: 10.442078880951536 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.06104538304075,
            "unit": "iter/sec",
            "range": "stddev: 0.020325223285630533",
            "extra": "mean: 12.039338000002804 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.6690024592363,
            "unit": "iter/sec",
            "range": "stddev: 0.0002941342550043143",
            "extra": "mean: 3.722052007662196 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.5287809551202,
            "unit": "iter/sec",
            "range": "stddev: 0.0008156021326290289",
            "extra": "mean: 11.424813519483875 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.9951548978537,
            "unit": "iter/sec",
            "range": "stddev: 0.0003064935169714607",
            "extra": "mean: 3.610171449997982 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.6618665978672,
            "unit": "iter/sec",
            "range": "stddev: 0.00004846514363751913",
            "extra": "mean: 9.288339795697079 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8536.478287683984,
            "unit": "iter/sec",
            "range": "stddev: 0.000016826867566809284",
            "extra": "mean: 117.14432653600858 usec\nrounds: 3825"
          }
        ]
      }
    ]
  }
}