window.BENCHMARK_DATA = {
  "lastUpdate": 1681000516961,
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
          "id": "69ddfb259fd0496c2d43ff8b8381f76149dfc6fc",
          "message": "chore(flake/flake-utils): `411e8764` -> `946da791`",
          "timestamp": "2023-04-09T00:29:41Z",
          "tree_id": "4382a23f1bec8f45de8afd436ed4723e25c30415",
          "url": "https://github.com/ibis-project/ibis/commit/69ddfb259fd0496c2d43ff8b8381f76149dfc6fc"
        },
        "date": 1681000437823,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.7397443779108,
            "unit": "iter/sec",
            "range": "stddev: 0.008915978694913375",
            "extra": "mean: 5.16156353571619 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5591628.479832027,
            "unit": "iter/sec",
            "range": "stddev: 1.082288506523936e-8",
            "extra": "mean: 178.8387772199624 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.05074547302334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002401964510421506",
            "extra": "mean: 6.449501400004465 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498894.4309099681,
            "unit": "iter/sec",
            "range": "stddev: 5.730656086369805e-7",
            "extra": "mean: 2.0044320762932366 usec\nrounds: 2201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1989.1871487300778,
            "unit": "iter/sec",
            "range": "stddev: 0.0001839351989518885",
            "extra": "mean: 502.71790697944766 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1841642.1712542416,
            "unit": "iter/sec",
            "range": "stddev: 2.0711785565541397e-7",
            "extra": "mean: 542.9936475221757 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1748.8595074883904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001799376203998006",
            "extra": "mean: 571.8012200054545 usec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.671157431595907,
            "unit": "iter/sec",
            "range": "stddev: 0.0001314410929957753",
            "extra": "mean: 176.33084816666647 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9230636172710917,
            "unit": "iter/sec",
            "range": "stddev: 0.0022135344152623367",
            "extra": "mean: 1.083348949399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1959189.6748227354,
            "unit": "iter/sec",
            "range": "stddev: 8.044961336470614e-8",
            "extra": "mean: 510.4151031678332 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6149404.45326993,
            "unit": "iter/sec",
            "range": "stddev: 1.2615937982980225e-8",
            "extra": "mean: 162.6173733729621 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.44508839075992,
            "unit": "iter/sec",
            "range": "stddev: 0.0002014462433502846",
            "extra": "mean: 19.067562486484164 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.1132120965299,
            "unit": "iter/sec",
            "range": "stddev: 0.000011672323164365147",
            "extra": "mean: 862.7284975824441 usec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5764954238506133,
            "unit": "iter/sec",
            "range": "stddev: 0.002506569417309068",
            "extra": "mean: 388.1241126000077 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.4436879162101,
            "unit": "iter/sec",
            "range": "stddev: 0.00005812404221213855",
            "extra": "mean: 1.8641285609761802 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4535.13777137768,
            "unit": "iter/sec",
            "range": "stddev: 0.000025663311586276713",
            "extra": "mean: 220.5004677721667 usec\nrounds: 1024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.11586861116406,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214470350097913",
            "extra": "mean: 10.089201799996772 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.84059108137451,
            "unit": "iter/sec",
            "range": "stddev: 0.0006555161576521234",
            "extra": "mean: 10.326248413330177 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.67640094848794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007222586342258443",
            "extra": "mean: 11.405577660373226 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.59219238824704,
            "unit": "iter/sec",
            "range": "stddev: 0.01629270360980131",
            "extra": "mean: 11.821421951217056 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8396.305035128167,
            "unit": "iter/sec",
            "range": "stddev: 0.00001234965570777374",
            "extra": "mean: 119.10000837466423 usec\nrounds: 3463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12186.824311385162,
            "unit": "iter/sec",
            "range": "stddev: 0.000011698927979662148",
            "extra": "mean: 82.05583131823613 usec\nrounds: 4879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.0150271279909,
            "unit": "iter/sec",
            "range": "stddev: 0.0002331703181849083",
            "extra": "mean: 3.6229911480011197 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.41010855038366,
            "unit": "iter/sec",
            "range": "stddev: 0.024388800037826494",
            "extra": "mean: 26.730743073177866 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.07070728134757,
            "unit": "iter/sec",
            "range": "stddev: 0.0007345094789473269",
            "extra": "mean: 9.992934267852352 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.46987981979342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007994016866227206",
            "extra": "mean: 10.155389666668306 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.4269894834887,
            "unit": "iter/sec",
            "range": "stddev: 0.00016541178919143835",
            "extra": "mean: 13.257853811319151 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.37911147568585,
            "unit": "iter/sec",
            "range": "stddev: 0.0007931617506981815",
            "extra": "mean: 10.375692249998343 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1678.3158530769365,
            "unit": "iter/sec",
            "range": "stddev: 0.004939250869114872",
            "extra": "mean: 595.8354014035275 usec\nrounds: 1567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.20434256592993,
            "unit": "iter/sec",
            "range": "stddev: 0.000809561088931928",
            "extra": "mean: 9.979607414140212 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.48192867855183,
            "unit": "iter/sec",
            "range": "stddev: 0.0004275138772578748",
            "extra": "mean: 17.7047778536595 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.69354483246696,
            "unit": "iter/sec",
            "range": "stddev: 0.000021915919221648105",
            "extra": "mean: 5.058334104168338 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12738.75953415071,
            "unit": "iter/sec",
            "range": "stddev: 0.000001501530449674362",
            "extra": "mean: 78.5005790649513 usec\nrounds: 5388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1967353.5662892896,
            "unit": "iter/sec",
            "range": "stddev: 2.025911863079795e-7",
            "extra": "mean: 508.2970428574987 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.1870359443511,
            "unit": "iter/sec",
            "range": "stddev: 0.00030410322564358434",
            "extra": "mean: 3.633892114751445 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7939420891129473,
            "unit": "iter/sec",
            "range": "stddev: 0.004354343223213625",
            "extra": "mean: 1.2595377090000057 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.21872276225535,
            "unit": "iter/sec",
            "range": "stddev: 0.0007975995536765177",
            "extra": "mean: 10.502136249998086 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2188.446456968439,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104176195582805",
            "extra": "mean: 456.9451524919906 usec\nrounds: 1364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.40360255121342,
            "unit": "iter/sec",
            "range": "stddev: 0.00008667680360861022",
            "extra": "mean: 10.373056333333189 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17072921023497567,
            "unit": "iter/sec",
            "range": "stddev: 0.011428882416204355",
            "extra": "mean: 5.857228523599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2179.203177441796,
            "unit": "iter/sec",
            "range": "stddev: 0.00007912319432597807",
            "extra": "mean: 458.8833250389792 usec\nrounds: 1286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.32925205898891,
            "unit": "iter/sec",
            "range": "stddev: 0.0009807828240788559",
            "extra": "mean: 10.169913622449684 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.80846447850071,
            "unit": "iter/sec",
            "range": "stddev: 0.00015228503685721034",
            "extra": "mean: 8.416908714285738 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2104.6729058682704,
            "unit": "iter/sec",
            "range": "stddev: 0.00010077889200338916",
            "extra": "mean: 475.1332129623515 usec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.1980260320356,
            "unit": "iter/sec",
            "range": "stddev: 0.0009370158851848838",
            "extra": "mean: 10.504419489365091 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2087.395742102722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000965267973550352",
            "extra": "mean: 479.0658425855835 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.8885175803831,
            "unit": "iter/sec",
            "range": "stddev: 0.000013968724196976427",
            "extra": "mean: 1.3552182696637007 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.03753213622811,
            "unit": "iter/sec",
            "range": "stddev: 0.020129234684067986",
            "extra": "mean: 12.65221690217266 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.10183554277512,
            "unit": "iter/sec",
            "range": "stddev: 0.0009014344231667091",
            "extra": "mean: 10.740926794515834 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71518.25159747845,
            "unit": "iter/sec",
            "range": "stddev: 4.4309856053414015e-7",
            "extra": "mean: 13.982444727930927 usec\nrounds: 13334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.3031545076456,
            "unit": "iter/sec",
            "range": "stddev: 0.0008589549044324929",
            "extra": "mean: 10.383875846150076 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 267.79190115302913,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079107722667278",
            "extra": "mean: 3.734242879244328 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.95299480799459,
            "unit": "iter/sec",
            "range": "stddev: 0.0009057876802420252",
            "extra": "mean: 10.004702729727681 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1991681.1199856757,
            "unit": "iter/sec",
            "range": "stddev: 8.659728556763683e-8",
            "extra": "mean: 502.08840660556746 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2137.3200844049334,
            "unit": "iter/sec",
            "range": "stddev: 0.00021069036028902418",
            "extra": "mean: 467.8756388884153 usec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.5361842659259,
            "unit": "iter/sec",
            "range": "stddev: 0.003606689987719359",
            "extra": "mean: 6.229125256543498 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.60032464896295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032034382431796",
            "extra": "mean: 3.641656291842904 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.34324362157254,
            "unit": "iter/sec",
            "range": "stddev: 0.00013592459557077474",
            "extra": "mean: 8.98123646728621 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.11296296806975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000640950236601841",
            "extra": "mean: 7.401214347111333 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.9435004456413,
            "unit": "iter/sec",
            "range": "stddev: 0.0009181329841748576",
            "extra": "mean: 10.10677806521906 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 207.59464063850297,
            "unit": "iter/sec",
            "range": "stddev: 0.016451711724869828",
            "extra": "mean: 4.8170800408155054 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2161.469005594396,
            "unit": "iter/sec",
            "range": "stddev: 0.00008692578483355418",
            "extra": "mean: 462.64831807060943 usec\nrounds: 1638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.48664564298022,
            "unit": "iter/sec",
            "range": "stddev: 0.00014749172900119752",
            "extra": "mean: 6.2701174507021475 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.7949010659011,
            "unit": "iter/sec",
            "range": "stddev: 0.0002973130280068236",
            "extra": "mean: 3.625882843138751 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.9648824942406,
            "unit": "iter/sec",
            "range": "stddev: 0.000025594714950677256",
            "extra": "mean: 1.475002652528238 msec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.453011500594151,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779948592580125",
            "extra": "mean: 95.66621063634723 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.48465225336112,
            "unit": "iter/sec",
            "range": "stddev: 0.00011102794924253419",
            "extra": "mean: 64.58007475001182 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.8835872205186,
            "unit": "iter/sec",
            "range": "stddev: 0.00005847648204310956",
            "extra": "mean: 6.064885031052727 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7042745.368330874,
            "unit": "iter/sec",
            "range": "stddev: 4.5649268098047055e-9",
            "extra": "mean: 141.99008308555239 nsec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12049652.453148749,
            "unit": "iter/sec",
            "range": "stddev: 3.7152024204149868e-9",
            "extra": "mean: 82.98994546834204 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 298.29163863840466,
            "unit": "iter/sec",
            "range": "stddev: 0.00009559343512276977",
            "extra": "mean: 3.3524238378408615 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.39621682504107,
            "unit": "iter/sec",
            "range": "stddev: 0.0005331511275568868",
            "extra": "mean: 21.553481478263066 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 788510.6658261705,
            "unit": "iter/sec",
            "range": "stddev: 1.4035721895902213e-7",
            "extra": "mean: 1.2682136632257717 usec\nrounds: 26041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.15354054802654,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952513614406196",
            "extra": "mean: 9.161406904249791 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.79016124707783,
            "unit": "iter/sec",
            "range": "stddev: 0.0003954400025505097",
            "extra": "mean: 3.805317502202034 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146982.05300107418,
            "unit": "iter/sec",
            "range": "stddev: 0.000007325897136284036",
            "extra": "mean: 6.803551723370552 usec\nrounds: 49262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.7121581530995,
            "unit": "iter/sec",
            "range": "stddev: 0.003813517507763838",
            "extra": "mean: 4.154339388889417 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.49945582228308,
            "unit": "iter/sec",
            "range": "stddev: 0.0009409368623843491",
            "extra": "mean: 17.391468939997594 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.1154550782261,
            "unit": "iter/sec",
            "range": "stddev: 0.00004259579906188482",
            "extra": "mean: 3.4000253394845545 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9033315098057072,
            "unit": "iter/sec",
            "range": "stddev: 0.005111828390553533",
            "extra": "mean: 1.1070133048000117 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13911.195330136416,
            "unit": "iter/sec",
            "range": "stddev: 0.000002162055270311",
            "extra": "mean: 71.88454883051332 usec\nrounds: 6113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.0259845747536,
            "unit": "iter/sec",
            "range": "stddev: 0.0008494105624707716",
            "extra": "mean: 23.241769128201913 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.26618800878634,
            "unit": "iter/sec",
            "range": "stddev: 0.0009723034944298591",
            "extra": "mean: 10.721999272724569 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6633843541001762,
            "unit": "iter/sec",
            "range": "stddev: 0.0824761285641578",
            "extra": "mean: 1.5074217439999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.89334095861773,
            "unit": "iter/sec",
            "range": "stddev: 0.0002211757449580115",
            "extra": "mean: 10.215199422223503 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.609878423900525,
            "unit": "iter/sec",
            "range": "stddev: 0.001183789699559643",
            "extra": "mean: 40.63408940000386 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.099420064675115,
            "unit": "iter/sec",
            "range": "stddev: 0.0014603168493369807",
            "extra": "mean: 26.954599243241763 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6461792286774908,
            "unit": "iter/sec",
            "range": "stddev: 0.0015321162687255173",
            "extra": "mean: 607.4672687999964 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}