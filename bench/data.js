window.BENCHMARK_DATA = {
  "lastUpdate": 1679448140200,
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
          "id": "45b0c12a05c467ec5a540211dfcb75851cfc0899",
          "message": "chore(flake/poetry2nix): `9ce22528` -> `4e91056f`",
          "timestamp": "2023-03-22T01:16:35Z",
          "tree_id": "601886b893709a7aaebadfa1623b176900e169e0",
          "url": "https://github.com/ibis-project/ibis/commit/45b0c12a05c467ec5a540211dfcb75851cfc0899"
        },
        "date": 1679448059798,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.727099243984685,
            "unit": "iter/sec",
            "range": "stddev: 0.0017322862489333622",
            "extra": "mean: 579.0055224000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.518371748209518,
            "unit": "iter/sec",
            "range": "stddev: 0.00050603301459787",
            "extra": "mean: 64.43975026667204 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.88955158578372,
            "unit": "iter/sec",
            "range": "stddev: 0.00014383632960075324",
            "extra": "mean: 8.937385000004383 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.3613430594155,
            "unit": "iter/sec",
            "range": "stddev: 0.00007561508058613304",
            "extra": "mean: 6.0473625909091275 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.4550014525804,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418390267117595",
            "extra": "mean: 8.301855364583352 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.00687779942871,
            "unit": "iter/sec",
            "range": "stddev: 0.0007158571952080914",
            "extra": "mean: 9.25866963636356 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143407.19895054033,
            "unit": "iter/sec",
            "range": "stddev: 4.678288767238951e-7",
            "extra": "mean: 6.973150632032703 usec\nrounds: 34966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.01861669609994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007769978857057171",
            "extra": "mean: 9.344168621051173 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.66608710034103,
            "unit": "iter/sec",
            "range": "stddev: 0.00023948643363611198",
            "extra": "mean: 3.1779719550175707 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.8141525203318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744775720747004",
            "extra": "mean: 3.3465617058815798 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5206.488077487984,
            "unit": "iter/sec",
            "range": "stddev: 0.00004110950952453794",
            "extra": "mean: 192.06804762001457 usec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.09845991010916,
            "unit": "iter/sec",
            "range": "stddev: 0.0006204629078185892",
            "extra": "mean: 8.257743333336323 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 101.17250078088647,
            "unit": "iter/sec",
            "range": "stddev: 0.011128711982332938",
            "extra": "mean: 9.884108747748977 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.2230793520206,
            "unit": "iter/sec",
            "range": "stddev: 0.00002928890774881618",
            "extra": "mean: 1.3473038333340766 msec\nrounds: 636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5357.330272158767,
            "unit": "iter/sec",
            "range": "stddev: 0.00005182433186381251",
            "extra": "mean: 186.6601365230082 usec\nrounds: 2278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.24714061961568,
            "unit": "iter/sec",
            "range": "stddev: 0.00005662946367858365",
            "extra": "mean: 8.247617179998201 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.531885951359319,
            "unit": "iter/sec",
            "range": "stddev: 0.003340333995270788",
            "extra": "mean: 394.9624980000067 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.50544174596227,
            "unit": "iter/sec",
            "range": "stddev: 0.00019641881321832543",
            "extra": "mean: 11.559966399994437 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.4756969584332,
            "unit": "iter/sec",
            "range": "stddev: 0.000028976653956805105",
            "extra": "mean: 4.988135794870642 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.203411218699213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006303950294217408",
            "extra": "mean: 39.67716875000112 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.19003795196068,
            "unit": "iter/sec",
            "range": "stddev: 0.00006559256609985065",
            "extra": "mean: 6.165606794519596 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.08920516186168,
            "unit": "iter/sec",
            "range": "stddev: 0.0006606458370335201",
            "extra": "mean: 8.32714313207548 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.7265752871122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063574316114240195",
            "extra": "mean: 564.1027860362725 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6144527.320551818,
            "unit": "iter/sec",
            "range": "stddev: 8.639627541544377e-9",
            "extra": "mean: 162.7464486412585 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.06792658781563,
            "unit": "iter/sec",
            "range": "stddev: 0.00028767973846678083",
            "extra": "mean: 3.214731942856527 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.65523055937791,
            "unit": "iter/sec",
            "range": "stddev: 0.0006774179466945058",
            "extra": "mean: 9.647366511110691 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.40700694408568,
            "unit": "iter/sec",
            "range": "stddev: 0.000103623234047814",
            "extra": "mean: 9.670524556819643 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12217.068000110377,
            "unit": "iter/sec",
            "range": "stddev: 0.000010978345818177328",
            "extra": "mean: 81.85269984508274 usec\nrounds: 4511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5724.137913182752,
            "unit": "iter/sec",
            "range": "stddev: 0.00004609619766542656",
            "extra": "mean: 174.6987957255518 usec\nrounds: 2433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6879014475646783,
            "unit": "iter/sec",
            "range": "stddev: 0.005581685116644284",
            "extra": "mean: 1.453696606599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.780316358279396,
            "unit": "iter/sec",
            "range": "stddev: 0.02526213838826934",
            "extra": "mean: 31.466017793101056 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.72155069068816,
            "unit": "iter/sec",
            "range": "stddev: 0.0002157680774905046",
            "extra": "mean: 3.2496911501826142 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 489444.7795999575,
            "unit": "iter/sec",
            "range": "stddev: 1.582265118454858e-7",
            "extra": "mean: 2.0431314045628177 usec\nrounds: 2108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8450248012886299,
            "unit": "iter/sec",
            "range": "stddev: 0.017834079182618586",
            "extra": "mean: 1.1833972192000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.3380477303824,
            "unit": "iter/sec",
            "range": "stddev: 0.000026798927158799354",
            "extra": "mean: 1.86102585555558 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1973189.75966194,
            "unit": "iter/sec",
            "range": "stddev: 1.1794670284584109e-7",
            "extra": "mean: 506.7936295044055 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 721303.186293591,
            "unit": "iter/sec",
            "range": "stddev: 0.000012326228208434968",
            "extra": "mean: 1.3863795682623967 usec\nrounds: 22573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 672.6856628596005,
            "unit": "iter/sec",
            "range": "stddev: 0.00010891855523714385",
            "extra": "mean: 1.486578435088061 msec\nrounds: 570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2697835.4351446093,
            "unit": "iter/sec",
            "range": "stddev: 1.4230357313676436e-8",
            "extra": "mean: 370.66753107828555 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5074.593401050304,
            "unit": "iter/sec",
            "range": "stddev: 0.00005029019933814296",
            "extra": "mean: 197.06012304217847 usec\nrounds: 2235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.2242887749196,
            "unit": "iter/sec",
            "range": "stddev: 0.00008159463455352357",
            "extra": "mean: 13.293578660372901 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.6514595842991,
            "unit": "iter/sec",
            "range": "stddev: 0.0034177427887849025",
            "extra": "mean: 6.186148906861637 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.9634996134668,
            "unit": "iter/sec",
            "range": "stddev: 0.00024389591054651977",
            "extra": "mean: 3.1749710719725672 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.65444828977755,
            "unit": "iter/sec",
            "range": "stddev: 0.0006801090316426795",
            "extra": "mean: 8.288132051279911 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1793642.3268807745,
            "unit": "iter/sec",
            "range": "stddev: 1.281813485420798e-7",
            "extra": "mean: 557.5247556401312 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.56112051212835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006843992475959496",
            "extra": "mean: 8.294547991526015 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5519.941091478118,
            "unit": "iter/sec",
            "range": "stddev: 0.000056001094765574946",
            "extra": "mean: 181.16135361368902 usec\nrounds: 2975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5515.631711249703,
            "unit": "iter/sec",
            "range": "stddev: 0.000052523756987142144",
            "extra": "mean: 181.30289554329676 usec\nrounds: 2872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5595543.099882195,
            "unit": "iter/sec",
            "range": "stddev: 1.0412685345007242e-8",
            "extra": "mean: 178.7136623114631 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.51323595689352,
            "unit": "iter/sec",
            "range": "stddev: 0.0007693968524731329",
            "extra": "mean: 8.887843207914877 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.47278383650115,
            "unit": "iter/sec",
            "range": "stddev: 0.0008895134748267016",
            "extra": "mean: 16.536364568624403 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1678723363341975,
            "unit": "iter/sec",
            "range": "stddev: 0.13941820965432594",
            "extra": "mean: 5.956907622999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5230.313335139974,
            "unit": "iter/sec",
            "range": "stddev: 0.00005368560278537232",
            "extra": "mean: 191.193134315965 usec\nrounds: 2375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.94800779381544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007029498263098962",
            "extra": "mean: 10.64418526249824 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.83818581217315,
            "unit": "iter/sec",
            "range": "stddev: 0.00030888582980610275",
            "extra": "mean: 3.535590490118894 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71172.75072116022,
            "unit": "iter/sec",
            "range": "stddev: 7.327652621450465e-7",
            "extra": "mean: 14.050321083103679 usec\nrounds: 14286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.441273697438476,
            "unit": "iter/sec",
            "range": "stddev: 0.000505353427756953",
            "extra": "mean: 21.53257050000238 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12615.393272063786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016029466955419336",
            "extra": "mean: 79.26823828904759 usec\nrounds: 5657"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8275683791788149,
            "unit": "iter/sec",
            "range": "stddev: 0.048681883412024486",
            "extra": "mean: 1.2083593636000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 285.71051127034025,
            "unit": "iter/sec",
            "range": "stddev: 0.00004047284895664899",
            "extra": "mean: 3.5000462375491557 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.73088018339269,
            "unit": "iter/sec",
            "range": "stddev: 0.0005790057293149777",
            "extra": "mean: 9.197019267326208 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.25640935946193,
            "unit": "iter/sec",
            "range": "stddev: 0.01595048197363334",
            "extra": "mean: 10.958134415095907 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5116.487864258773,
            "unit": "iter/sec",
            "range": "stddev: 0.000035181256531569256",
            "extra": "mean: 195.44656931280932 usec\nrounds: 2431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.69591324492534,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993191596051958",
            "extra": "mean: 9.737485829791913 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.50436120148072,
            "unit": "iter/sec",
            "range": "stddev: 0.00022224263583532752",
            "extra": "mean: 10.470726021509641 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1161.253314188844,
            "unit": "iter/sec",
            "range": "stddev: 0.000009801747218967048",
            "extra": "mean: 861.1385541650899 usec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 296.31013945933375,
            "unit": "iter/sec",
            "range": "stddev: 0.00024133762675541327",
            "extra": "mean: 3.374842325087705 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.68453978914874,
            "unit": "iter/sec",
            "range": "stddev: 0.003998404073475268",
            "extra": "mean: 4.207257236365081 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13905.798575231423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018458304059356523",
            "extra": "mean: 71.91244678181725 usec\nrounds: 5562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11785749.667660309,
            "unit": "iter/sec",
            "range": "stddev: 8.23893967692124e-9",
            "extra": "mean: 84.84823012519702 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.14206735976813,
            "unit": "iter/sec",
            "range": "stddev: 0.00010080324096335856",
            "extra": "mean: 3.4825966435181814 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.71902283160938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006114105989700837",
            "extra": "mean: 8.283698596491268 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.68977720848653,
            "unit": "iter/sec",
            "range": "stddev: 0.036763738982691425",
            "extra": "mean: 33.681626944447395 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1979485.313740274,
            "unit": "iter/sec",
            "range": "stddev: 7.387743591553201e-8",
            "extra": "mean: 505.1818233046052 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.82376466753333,
            "unit": "iter/sec",
            "range": "stddev: 0.0008499807295520444",
            "extra": "mean: 22.309594194445655 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.50145114280906,
            "unit": "iter/sec",
            "range": "stddev: 0.0001817091342235661",
            "extra": "mean: 3.149591903912936 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.454292804962254,
            "unit": "iter/sec",
            "range": "stddev: 0.0015773878599779645",
            "extra": "mean: 95.65448554543434 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.97923157113786,
            "unit": "iter/sec",
            "range": "stddev: 0.000013398052630241193",
            "extra": "mean: 2.976374448276774 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.44491598696524,
            "unit": "iter/sec",
            "range": "stddev: 0.00014444780043112448",
            "extra": "mean: 15.280025727272252 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.73733354168797,
            "unit": "iter/sec",
            "range": "stddev: 0.0003703191541153128",
            "extra": "mean: 7.477343637095058 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5209.641476624478,
            "unit": "iter/sec",
            "range": "stddev: 0.000054067740932279624",
            "extra": "mean: 191.95178871463096 usec\nrounds: 2357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.58251665328498,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712283593439823",
            "extra": "mean: 9.654138867346068 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.618897485763466,
            "unit": "iter/sec",
            "range": "stddev: 0.00027476222779546983",
            "extra": "mean: 177.97085683333572 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6885843.312023414,
            "unit": "iter/sec",
            "range": "stddev: 4.467344845706506e-9",
            "extra": "mean: 145.22549449443056 nsec\nrounds: 67564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.32261475249563,
            "unit": "iter/sec",
            "range": "stddev: 0.0005402915993785667",
            "extra": "mean: 17.44512186538845 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.06386811774576,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236367243456383",
            "extra": "mean: 6.170406837836677 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8243467163683308,
            "unit": "iter/sec",
            "range": "stddev: 0.0034553776530127814",
            "extra": "mean: 1.21308180179999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8456.613251313524,
            "unit": "iter/sec",
            "range": "stddev: 0.000012210378713253621",
            "extra": "mean: 118.25064837210984 usec\nrounds: 3717"
          }
        ]
      }
    ]
  }
}