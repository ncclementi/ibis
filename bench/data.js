window.BENCHMARK_DATA = {
  "lastUpdate": 1678461552487,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "bb0a6f0fdc249dbc1d47dc9830e7fff6bf10fea1",
          "message": "feat(api): allow single argument set operations",
          "timestamp": "2023-03-10T10:13:38-05:00",
          "tree_id": "b03283f958479b5a5dc0f1fbb2d7ffedd5267bf7",
          "url": "https://github.com/ibis-project/ibis/commit/bb0a6f0fdc249dbc1d47dc9830e7fff6bf10fea1"
        },
        "date": 1678461468797,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4487495585021244,
            "unit": "iter/sec",
            "range": "stddev: 0.0030582352707272213",
            "extra": "mean: 408.37169179999364 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8314.005934305507,
            "unit": "iter/sec",
            "range": "stddev: 0.00001699464590017855",
            "extra": "mean: 120.27896153811595 usec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70766.69582925172,
            "unit": "iter/sec",
            "range": "stddev: 5.713688465761281e-7",
            "extra": "mean: 14.130940950144595 usec\nrounds: 12210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.34835639019731,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782669059305775",
            "extra": "mean: 10.379004245284065 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.74277615463997,
            "unit": "iter/sec",
            "range": "stddev: 0.0006087908625304762",
            "extra": "mean: 9.45691078261066 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7119085967463274,
            "unit": "iter/sec",
            "range": "stddev: 0.0040490288955375275",
            "extra": "mean: 584.1433367999969 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5659.730143212569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004807637858997469",
            "extra": "mean: 176.68686928461597 usec\nrounds: 1706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 70.99760007061282,
            "unit": "iter/sec",
            "range": "stddev: 0.024002853151332076",
            "extra": "mean: 14.0849831403515 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1916312.8715659112,
            "unit": "iter/sec",
            "range": "stddev: 1.439789664926992e-7",
            "extra": "mean: 521.8354553882697 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 116.67268187263029,
            "unit": "iter/sec",
            "range": "stddev: 0.0008573725511588038",
            "extra": "mean: 8.570986660713638 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 338.62022214918187,
            "unit": "iter/sec",
            "range": "stddev: 0.00001898489569775183",
            "extra": "mean: 2.953160899999179 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.33331506764566,
            "unit": "iter/sec",
            "range": "stddev: 0.001417434431286233",
            "extra": "mean: 24.79339965789656 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.36742559195537,
            "unit": "iter/sec",
            "range": "stddev: 0.0001790360974181022",
            "extra": "mean: 6.083930537931009 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14044.7879691842,
            "unit": "iter/sec",
            "range": "stddev: 0.000001727816607211391",
            "extra": "mean: 71.20079008626611 usec\nrounds: 4983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.34556731986959,
            "unit": "iter/sec",
            "range": "stddev: 0.0006530552045998586",
            "extra": "mean: 10.065874371427494 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.94059281742288,
            "unit": "iter/sec",
            "range": "stddev: 0.0007338160200488233",
            "extra": "mean: 9.620880282610592 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5282.333492141292,
            "unit": "iter/sec",
            "range": "stddev: 0.00004619119044735362",
            "extra": "mean: 189.31027385675938 usec\nrounds: 1771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.8775835425838,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502790453706534",
            "extra": "mean: 3.155792810650534 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146564.48538845108,
            "unit": "iter/sec",
            "range": "stddev: 4.774680819730882e-7",
            "extra": "mean: 6.822935292609417 usec\nrounds: 32052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1186.384000567694,
            "unit": "iter/sec",
            "range": "stddev: 0.000017895738536185587",
            "extra": "mean: 842.8974088671898 usec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 313.1995783831656,
            "unit": "iter/sec",
            "range": "stddev: 0.000234457166426099",
            "extra": "mean: 3.192852318519436 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.24279818363644,
            "unit": "iter/sec",
            "range": "stddev: 0.000022907175484615516",
            "extra": "mean: 5.095728400000894 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.74164896192988,
            "unit": "iter/sec",
            "range": "stddev: 0.0010128539451509373",
            "extra": "mean: 10.231053093748166 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5581.3086816640025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000642197534204836",
            "extra": "mean: 179.16944878631256 usec\nrounds: 1689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.35180330905331,
            "unit": "iter/sec",
            "range": "stddev: 0.02415080025814748",
            "extra": "mean: 10.828158889908426 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8425832497439792,
            "unit": "iter/sec",
            "range": "stddev: 0.009063853487327902",
            "extra": "mean: 1.1868263465999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.93034677731904,
            "unit": "iter/sec",
            "range": "stddev: 0.00024518197248721047",
            "extra": "mean: 10.534039260867022 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 275.5743459841837,
            "unit": "iter/sec",
            "range": "stddev: 0.0004137243105235091",
            "extra": "mean: 3.6287848073397733 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 37.63002001118105,
            "unit": "iter/sec",
            "range": "stddev: 0.0026334976723304654",
            "extra": "mean: 26.574527457143763 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.3755920770853,
            "unit": "iter/sec",
            "range": "stddev: 0.0002765750496809987",
            "extra": "mean: 6.562730857144824 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.95720137152222,
            "unit": "iter/sec",
            "range": "stddev: 0.0008514693026437552",
            "extra": "mean: 9.905187410257172 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 116.01552878624165,
            "unit": "iter/sec",
            "range": "stddev: 0.0009858761062726928",
            "extra": "mean: 8.619535767858265 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5264.840055233123,
            "unit": "iter/sec",
            "range": "stddev: 0.000048029881376592536",
            "extra": "mean: 189.93929340854797 usec\nrounds: 1411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 52.090406123055125,
            "unit": "iter/sec",
            "range": "stddev: 0.03827955181216202",
            "extra": "mean: 19.197393040815662 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 722.8390684735488,
            "unit": "iter/sec",
            "range": "stddev: 0.00005891558171776363",
            "extra": "mean: 1.383433800986635 msec\nrounds: 608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.18875030862154,
            "unit": "iter/sec",
            "range": "stddev: 0.000093474303177556",
            "extra": "mean: 3.4341986046512183 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12625.105608629812,
            "unit": "iter/sec",
            "range": "stddev: 0.00000218813762939783",
            "extra": "mean: 79.20725822019709 usec\nrounds: 5596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 59.127521753848285,
            "unit": "iter/sec",
            "range": "stddev: 0.00057642625717746",
            "extra": "mean: 16.91259789583377 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5399.802529495219,
            "unit": "iter/sec",
            "range": "stddev: 0.000053087897257844793",
            "extra": "mean: 185.19195739802015 usec\nrounds: 1737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1841673.3299074122,
            "unit": "iter/sec",
            "range": "stddev: 3.089072444544731e-7",
            "extra": "mean: 542.9844607948326 nsec\nrounds: 78125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.373851159995057,
            "unit": "iter/sec",
            "range": "stddev: 0.0026324764008042218",
            "extra": "mean: 96.39621627273053 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.7772527019794,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870628007370284",
            "extra": "mean: 1.468909244589236 msec\nrounds: 462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 110.05980079363225,
            "unit": "iter/sec",
            "range": "stddev: 0.0010943231282551792",
            "extra": "mean: 9.085969561902543 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 113.46231726783748,
            "unit": "iter/sec",
            "range": "stddev: 0.0011332183751605006",
            "extra": "mean: 8.813498825688661 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.416469026330008,
            "unit": "iter/sec",
            "range": "stddev: 0.0017700505228568017",
            "extra": "mean: 64.86569643749718 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5079.984306672058,
            "unit": "iter/sec",
            "range": "stddev: 0.00005794310903345235",
            "extra": "mean: 196.85100182034006 usec\nrounds: 1648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.08751156990542,
            "unit": "iter/sec",
            "range": "stddev: 0.0001636886478586411",
            "extra": "mean: 6.365878420290532 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6121665.946032592,
            "unit": "iter/sec",
            "range": "stddev: 1.4350542224616023e-8",
            "extra": "mean: 163.3542256003068 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.42607098280536,
            "unit": "iter/sec",
            "range": "stddev: 0.0008830407863869739",
            "extra": "mean: 15.521666690909797 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5616996.978742846,
            "unit": "iter/sec",
            "range": "stddev: 1.1989580116228121e-8",
            "extra": "mean: 178.03107314919575 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 113.56752035483036,
            "unit": "iter/sec",
            "range": "stddev: 0.0005163490450138614",
            "extra": "mean: 8.805334455446417 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.3376495295034,
            "unit": "iter/sec",
            "range": "stddev: 0.00030455065654908246",
            "extra": "mean: 3.191445399241248 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1738.6462533714512,
            "unit": "iter/sec",
            "range": "stddev: 0.000009083453780513144",
            "extra": "mean: 575.1601270591276 usec\nrounds: 1275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8421741713733707,
            "unit": "iter/sec",
            "range": "stddev: 0.008495669937036604",
            "extra": "mean: 1.1874028366000062 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 301.2840757909649,
            "unit": "iter/sec",
            "range": "stddev: 0.000349212124791441",
            "extra": "mean: 3.319126632812197 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8345639893203416,
            "unit": "iter/sec",
            "range": "stddev: 0.003727286766259876",
            "extra": "mean: 1.198230468600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5640.012545360279,
            "unit": "iter/sec",
            "range": "stddev: 0.000046372052024569544",
            "extra": "mean: 177.30457015076036 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 201.3893283635397,
            "unit": "iter/sec",
            "range": "stddev: 0.00399945968676389",
            "extra": "mean: 4.965506405557107 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.28711655385523,
            "unit": "iter/sec",
            "range": "stddev: 0.0007410007318810048",
            "extra": "mean: 24.220630634149334 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.52812117309244,
            "unit": "iter/sec",
            "range": "stddev: 0.0009946398776992788",
            "extra": "mean: 9.849487890110051 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1889840.489804069,
            "unit": "iter/sec",
            "range": "stddev: 2.2589660828858448e-7",
            "extra": "mean: 529.1451873293687 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6569635590274827,
            "unit": "iter/sec",
            "range": "stddev: 0.13586791904226236",
            "extra": "mean: 1.522154442600015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1591345995776838,
            "unit": "iter/sec",
            "range": "stddev: 0.22514793938515287",
            "extra": "mean: 6.2839885396 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 288.66267849133794,
            "unit": "iter/sec",
            "range": "stddev: 0.00005468802885951039",
            "extra": "mean: 3.4642510948293848 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.753895861614637,
            "unit": "iter/sec",
            "range": "stddev: 0.0012153895342960064",
            "extra": "mean: 42.09835749999901 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12048234.141795658,
            "unit": "iter/sec",
            "range": "stddev: 3.1395117208488456e-9",
            "extra": "mean: 82.99971499810209 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12047.347329607177,
            "unit": "iter/sec",
            "range": "stddev: 0.00005433132750217866",
            "extra": "mean: 83.00582465506176 usec\nrounds: 2823"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.57650926957528,
            "unit": "iter/sec",
            "range": "stddev: 0.0008127593647597208",
            "extra": "mean: 26.61237085185222 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6997751.47461281,
            "unit": "iter/sec",
            "range": "stddev: 3.89600851592338e-9",
            "extra": "mean: 142.90304587521774 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497525.76711108634,
            "unit": "iter/sec",
            "range": "stddev: 5.654582661218271e-7",
            "extra": "mean: 2.0099461497372504 usec\nrounds: 1987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.060528075700244,
            "unit": "iter/sec",
            "range": "stddev: 0.004365997479985592",
            "extra": "mean: 33.26621533333478 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.3823333352757,
            "unit": "iter/sec",
            "range": "stddev: 0.0002905894207293275",
            "extra": "mean: 3.3626745367976416 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.3012882252904,
            "unit": "iter/sec",
            "range": "stddev: 0.00007590113425978175",
            "extra": "mean: 7.390912630003186 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 758245.4596558228,
            "unit": "iter/sec",
            "range": "stddev: 3.4315712453162345e-7",
            "extra": "mean: 1.3188341417222762 usec\nrounds: 21645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.36890992438724,
            "unit": "iter/sec",
            "range": "stddev: 0.00013123892170635902",
            "extra": "mean: 9.060522575470674 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 113.48734689050261,
            "unit": "iter/sec",
            "range": "stddev: 0.0010763676450298125",
            "extra": "mean: 8.81155500943063 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1906610.4060173857,
            "unit": "iter/sec",
            "range": "stddev: 1.5833846037669458e-7",
            "extra": "mean: 524.4910008064235 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.598085527897848,
            "unit": "iter/sec",
            "range": "stddev: 0.004782518367405502",
            "extra": "mean: 178.63249766666436 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.0874590044575,
            "unit": "iter/sec",
            "range": "stddev: 0.00031242298239642584",
            "extra": "mean: 3.2145300977422915 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 106.45397958584749,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582630400080846",
            "extra": "mean: 9.393730548077555 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 530.9383539719513,
            "unit": "iter/sec",
            "range": "stddev: 0.000042690110690280956",
            "extra": "mean: 1.8834578299326037 msec\nrounds: 441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5310.408387043162,
            "unit": "iter/sec",
            "range": "stddev: 0.00006756543015494875",
            "extra": "mean: 188.30943443820533 usec\nrounds: 2021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 134.63328623958827,
            "unit": "iter/sec",
            "range": "stddev: 0.003945424532185639",
            "extra": "mean: 7.427583682540721 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 116.95341955815415,
            "unit": "iter/sec",
            "range": "stddev: 0.0009855796157266351",
            "extra": "mean: 8.550412666666476 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.02710240522157,
            "unit": "iter/sec",
            "range": "stddev: 0.0009009577977294881",
            "extra": "mean: 9.431550776311251 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.23363553794684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003403396731261679",
            "extra": "mean: 3.353075846714015 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.92684112364458,
            "unit": "iter/sec",
            "range": "stddev: 0.06269989544028247",
            "extra": "mean: 38.570067029416364 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5218.758247399034,
            "unit": "iter/sec",
            "range": "stddev: 0.000028862482303346443",
            "extra": "mean: 191.61646364791622 usec\nrounds: 3026"
          }
        ]
      }
    ]
  }
}